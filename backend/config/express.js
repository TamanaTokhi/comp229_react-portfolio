
const express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('../app/routers/index');
var referencesRouter = require('../app/routers/references');
var projectsRouter = require('../app/routers/projects');
var servicesRouter = require('../app/routers/services');
var usersRouter = require('../app/routers/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/references', referencesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

module.exports = app;
