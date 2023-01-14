const express = require('express');
const router = express.Router();
const Cities = require('../model/Cities')

router.get('/', async (req, res) => {
    try {
        const cities = await Cities.find()
        res.json(cities);
    }catch (err){
        res.json({ message: err})
    }
   });

router.post('/', async (req, res) => {
    const cities = new Cities({
        name: req.body.name,
        description: req.body.description,
        imgURL: req.body.imgURL
    });

    try {
        const savedCities = await cities.save();
        res.json(savedCities);
    } catch (err) {
        res.json({ message: err });
    }
})


   module.exports = router