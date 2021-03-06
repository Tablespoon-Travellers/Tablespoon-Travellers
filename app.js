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

/*const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);*/

const privateRoutes = require("./routes/private.routes");
app.use("/profile", isLoggedIn, privateRoutes);

const countriesRoutes = require("./routes/country.routes");
app.use("/countries", isLoggedIn, countriesRoutes);

const flapRoutes = require("./routes/flap.routes");
app.use("/random", isLoggedIn, flapRoutes);

const aboutRoutes = require("./routes/about.routes");
app.use("/about", isLoggedIn, aboutRoutes);

const staticRoutes = require("./routes/static.routes");
app.use("/static", staticRoutes);

app.use(function (req, res, next) {
  if (req.session.currentUser) {
    req.app.locals.user = req.session.currentUser;
  }
  next();
});

app.get("/", (req, res) => {
  res.render("static/landing-page");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.status === 404) {
    res.render("static/404");
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("static/500");
});

module.exports = app;
