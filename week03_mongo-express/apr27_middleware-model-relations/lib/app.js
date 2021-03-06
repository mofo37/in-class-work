const express = require('express');
const app = express();
// const morgan = require('morgan');
const logger = require('./logger');
const bodyParser = require('body-parser');


// app.use(morgan('dev'));
app.use(logger(console.log));

app.use(bodyParser.json());

app.use(express.static('./public'));

const pets = require('./routes/pets');
const stores = require('./routes/stores');
const toys = require('./routes/toys');

app.use('/api/pets', pets);
app.use('/api/stores', stores);
app.use('/api/toys', toys);

module.exports = app;
