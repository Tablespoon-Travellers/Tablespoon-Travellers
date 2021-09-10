require('dotenv').config()

var createError = require('http-errors');
var express = require('express');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// Functional curling style of loading configuration
require('./config/db')
require('./config/global')(app)


app.use('/', indexRouter);


const hbs = require('hbs');

// require('./config')(app);


app.locals.title = `app created with Ironlauncher`;

// 👇 Start handling routes here
const isLoggedIn = require('./middleware/isLoggedIn');

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const privateRoutes = require('./routes/private.routes');
app.use('/private', isLoggedIn, privateRoutes);

const index = require('./routes/index');
app.use('/', index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
