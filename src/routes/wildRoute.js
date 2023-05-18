'use strict';


const express = require('express');
const router = express.Router();
const { wildAnimals } = require('../models/wildAnimals');


router.get('/wildAnimal', async (req, res, next) => {
  let animals = await wildAnimals.findAll();
  res.status(200).send(animals);
});

router.get('/wildAnimal/:id', async (req, res, next) => {
  let singleWildAnimal = await wildAnimals.findAll({where: {id: req.params.id}});
  res.status(200).send(singleWildAnimal);
});


router.post('/wildAnimals', async (req, res, next) => {
  let newWildAnimal = await wildAnimals.create(req.body);
  res.status(200).send(newWildAnimal);
});


module.exports = router;
