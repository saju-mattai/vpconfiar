const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const cors = require("cors");

const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//cors
const corsOptions = {
  origin: " http://localhost:3000",
  // origin: "*",
  credentials: true,
  optioSuccessStatus: 200,
};
//connect
mongoose
  // .connect("mongodb://127.0.0.1:27017/RENTAL-DATABASE")
  .connect("mongodb+srv://msaju682:msaju123@cluster0.iqnerpc.mongodb.net/")
  .then((data) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/admin', adminRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const PORT = process.env.PORT || 2000;

const server = app.listen(PORT, (req, res) => {
  console.log(`server is runnig http://localhost:${PORT}/`);
});

module.exports = app;
