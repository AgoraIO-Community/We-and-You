const functions = require('firebase-functions');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//----------------------------ROUTES----------------------------
app.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

app.get('/users', function (req, res, next) {
    res.render('agora', { title: 'Agora Shk' });
});
//----------------------------ROUTES----------------------------

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

exports.application = functions.https.onRequest(app);