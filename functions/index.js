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
    res.render('index', { title: 'We & You' });
});

app.get('/users', function (req, res, next) {
    res.render('agora', { title: 'Agora Shk' });
});

app.get('/call', function (req, res, next) {
    res.render('call', { title: 'Agora Shk' });
});

app.get('/volunteer', function (req, res, next) {
    res.render('volunteer', { title: 'Agora Shk' });
});

app.get('/efa562b4e3da7df859dd7ebdbfb70618', function (req, res, next) {
    res.json({
        "apiKey": "AIzaSyD9DeyZDsZDvzZXy0HzWN3jQ2uXckR9qes",
        "authDomain": "weandyou-7c667.firebaseapp.com",
        "databaseURL": "https://weandyou-7c667.firebaseio.com",
        "projectId": "weandyou-7c667",
        "storageBucket": "weandyou-7c667.appspot.com",
        "messagingSenderId": "64203246790"
    });
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