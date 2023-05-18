'use strict';


const express = require('express');
const router = express.Router();
const { wildAnimalModel } = require('../models/wildAnimals');


router.get('/wildAnimal', async (req, res, next) => {
  let animals = await wildAnimalModel.findAll();
  res.status(200).send(animals);
});

router.get('/wildAnimal/:id', async (req, res, next) => {
  let singleWildAnimal = await wildAnimalModel.findAll({where: {id: req.params.id}});
  res.status(200).send(singleWildAnimal);
});


router.post('/wildAnimals', async (req, res, next) => {
  let newWildAnimal = await wildAnimalModel.create(req.body);
  res.status(200).send(newWildAnimal);
});


module.exports(router);
