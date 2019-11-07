const fs = require('fs');
const _ = require('lodash')
const mongoose = require('mongoose');

const Animal = require('./model/Animal')
const Food = require('./model/Food')
const Furniture = require('./model/Furnitures')
const Nature = require('./model/Nature')
const Technology = require('./model/Technology')
const Transport = require('./model/Transport')

fs.readFile('./resources/defaultData.json', 'utf8', (err, data) => {
    if (err) throw err;
    obj = JSON.parse(data);
    // console.log('check obj', obj)
    obj.categories.forEach(element => {
        if (element.name === 'Animals') {
            element.models.forEach(itr => {
                Animal.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const animal = new Animal();
                        animal._id = new mongoose.Types.ObjectId();
                        animal.name = itr.name;
                        animal.obj = itr.obj;
                        animal.thumb = itr.thumb;
                        animal.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

        if (element.name === 'Foods') {
            element.models.forEach(itr => {
                Food.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const food = new Food();
                        food._id = new mongoose.Types.ObjectId();
                        food.name = itr.name;
                        food.obj = itr.obj;
                        food.thumb = itr.thumb;
                        food.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

        if (element.name === 'Furniture') {
            element.models.forEach(itr => {
                Furniture.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const furniture = new Furniture();
                        furniture._id = new mongoose.Types.ObjectId();
                        furniture.name = itr.name;
                        furniture.obj = itr.obj;
                        furniture.thumb = itr.thumb;
                        furniture.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

        if (element.name === 'Nature') {
            element.models.forEach(itr => {
                Nature.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const nature = new Nature();
                        nature._id = new mongoose.Types.ObjectId();
                        nature.name = itr.name;
                        nature.obj = itr.obj;
                        nature.thumb = itr.thumb;
                        nature.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

        if (element.name === 'Technology') {
            element.models.forEach(itr => {
                Technology.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const tech = new Technology();
                        tech._id = new mongoose.Types.ObjectId();
                        tech.name = itr.name;
                        tech.obj = itr.obj;
                        tech.thumb = itr.thumb;
                        tech.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

        if (element.name === 'Transport') {
            element.models.forEach(itr => {
                Transport.find({ name: itr.name }, (err, data) => {
                    if (!_.isEmpty(data)) {
                        // console.log(itr.name, 'already present')
                    }
                    else {
                        const trans = new Transport();
                        trans._id = new mongoose.Types.ObjectId();
                        trans.name = itr.name;
                        trans.obj = itr.obj;
                        trans.thumb = itr.thumb;
                        trans.save((err, logs) => {
                            if (err) {
                                // console.log(err)
                            } else {
                                // console.log(logs)
                            }
                        });
                    }
                })
            })
        }

    });
});

