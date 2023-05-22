'use strict';


const express = require('express');
const router = express.Router();
const { petModel } = require('../models');
const Collection = require('../models/collection');

// get all pets
router.get('/pet', async (req, res, next) => {
  let pets = await petModel.findAll();
  res.status(200).send(pets);
});

// get single pet
router.get('/pet/:id', async (req, res, next) => {
  let singlePet = await petModel.findOne({where: {id: req.params.id}});
  res.status(200).send(singlePet);
});

// create new pet
router.post('/pet', async (req, res, next) => {
  let newPet = await petModel.create(req.body);
  res.status(200).send(newPet);
});

// update pet
router.put('/pet/:id', async (req, res, next) => {
  await petModel.update(req.body, { where: {id: req.params.id} });

  const updatedPet = await petModel.findByPk(req.params.id);
  res.status(200).send(updatedPet);
});

// delete pet
router.delete('/pet/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    let deletedPet = await petModel.findByPk(req.params.id);
    await petModel.destroy({where: {id}});
    res.status(200).json(deletedPet);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
