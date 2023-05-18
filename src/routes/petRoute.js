'use strict';


const express = require('express');
const router = express.Router();
const { pets } = require('../models/pets');


router.get('/pet', async (req, res, next) => {
  let pets = await pets.findAll();
  res.status(200).send(pets);
});

router.get('/pet/:id', async (req, res, next) => {
  let singlePet = await pets.findAll({where: {id: req.params.id}});
  res.status(200).send(singlePet);
});


router.post('/pets', async (req, res, next) => {
  let newPet = await pets.create(req.body);
  res.status(200).send(newPet);
});


module.exports = router;
