'use strict';


const express = require('express');
const router = express.Router();
const { petModel } = require('../models/pets');


router.get('/pet', async (req, res, next) => {
  let pets = await petModel.findAll();
  res.status(200).send(pets);
});

router.get('/pet/:id', async (req, res, next) => {
  let singlePet = await petModel.findAll({where: {id: req.params.id}});
  res.status(200).send(singlePet);
});


router.post('/pets', async (req, res, next) => {
  let newPet = await petModel.create(req.body);
  res.status(200).send(newPet);
});


module.exports(router);
