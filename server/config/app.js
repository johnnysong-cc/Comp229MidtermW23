/** app.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */

//#region dependencies
require("dotenv").config();
const express = require('express');
const mongoose = require('../config/dbConn');
const session = require("../config/sessionMgmt");
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
// define routers
const index = require('../routes/index'); // top level routes
const books = require('../routes/books'); // routes for books
const app = express();
//#endregion

//#region view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
//#endregion

//#region HTTP pipeline
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../client')));
app.use(session);

// route redirects
app.use('/', index);
app.use('/books', books);

//#region Exception Handler
// catch 404 and forward to error handler
app.use((req, res, next)=>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//#endregion Exception Handler

//#endregion HTTP pipeline
module.exports = app;