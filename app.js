require("dotenv/config");

var createError = require("http-errors");
var express = require("express");

var app = express();

// Functional curling style of loading configuration
require("./config/db");
require("./config/global")(app);

// default value for title local
const projectName = "Tablespoon Traveller";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

const isLoggedIn = require("./middleware/isLoggedIn");

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const privateRoutes = require("./routes/private.routes");
app.use("/private", isLoggedIn, privateRoutes);

const countriesRoutes = require("./routes/country.routes");
app.use("/countries", isLoggedIn, countriesRoutes);

app.get("/", (req, res) => {
	res.render('static/landing-page');
})

const staticRoutes = require("./routes/static.routes");
app.use(
  "/static",
  // Not sure why we need this
  (req, res, next) => {
    next();
  },
  staticRoutes
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.status === 404) {
    res.render("static/404");
    return
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("static/500");
});

module.exports = app;
