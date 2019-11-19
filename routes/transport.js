const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Transport = require('../model/Transport');

router.get('/', async (req, res, next) => {
    try {
        var trans = await Transport.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            transports: trans
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
        var transport = await Transport.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                transport: transport
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                transport: {}
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