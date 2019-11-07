const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Food = require('../model/Food');


router.get('/', async (req, res, next) => {
    try {
        var foods = await Food.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            foods: foods
        })
    } catch (err) {
        res.status(201).json({
            status: 200,
            message: 'error',
            error: err
        })
    }
})


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        var food = await Food.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                food: food
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                food: {}
            })
        }
    } catch (err) {
        res.status(201).json({
            status: 200,
            message: 'error',
            error: err
        })
    }

})



module.exports = router;