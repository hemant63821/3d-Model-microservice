const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const db = require('./db')
const animalRoutes = require('./routes/animal');
const foodRoutes = require('./routes/food');
const funitureRoutes = require('./routes/furniture');
const natureRoutes = require('./routes/nature');
const techRoutes = require('./routes/technology');
const transportRoutes = require('./routes/transport');


mongoose.connect('mongodb://localhost/3dModels')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'GET', 'DELETE')
        return res.status(200).json({})
    }
    next();
})


app.use('/api/animal', animalRoutes)
app.use('/api/food', foodRoutes)
app.use('/api/furniture', funitureRoutes)
app.use('/api/nature', natureRoutes)
app.use('/api/tech', techRoutes)
app.use('/api/transport', transportRoutes)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: error.status,
        message: 'error',
        error: error.message
    })
})

module.exports = app;