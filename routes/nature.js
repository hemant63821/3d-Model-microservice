const express = require('express');
const router = express.Router();

const _ = require('lodash');

const Nature = require('../model/Nature');

router.get('/', async (req, res, next) => {
    try {
        var natures = await Nature.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            natures: natures
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
        var nature = await Nature.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                nature: nature
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                nature: {}
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