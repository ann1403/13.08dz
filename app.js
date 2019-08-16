const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let indexRouter = require('./routes/index.js');
let carsRouter = require('./routes/cars.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/cars', carsRouter);

module.exports = app;