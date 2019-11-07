const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Furniture = require('../model/Furnitures');


router.get('/', async (req, res, next) => {
    try {
        var furnitures = await Furniture.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            furnitures: furnitures
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
        var furniture = await Furniture.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                furniture: furniture
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                furniture: {}
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