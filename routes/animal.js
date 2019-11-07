const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Animal = require('../model/Animal');


router.get('/', async (req, res, next) => {
    try {
        var animals = await Animal.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            animals: animals
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
        var animal = await Animal.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                amimal: animal
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                animal: {}
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