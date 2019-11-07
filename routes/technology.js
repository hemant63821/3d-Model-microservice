const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Tech = require('../model/Technology');


router.get('/', async (req, res, next) => {
    try {
        var techs = await Tech.find().exec();
        res.status(201).json({
            status: 200,
            message: 'success',
            techs: techs
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
        var tech = await Tech.findById(id).exec();
        if (!_.isEmpty(animal)) {
            res.status(201).json({
                status: 200,
                message: 'success',
                tech: tech
            })
        } else {
            res.status(201).json({
                status: 200,
                message: 'success',
                tech: {}
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