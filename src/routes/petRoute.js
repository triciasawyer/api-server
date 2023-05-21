'use strict';


const express = require('express');
const router = express.Router();
const { pet } = require('../models');


router.get('/pet', async (req, res, next) => {
  let pets = await pet.read();
  res.status(200).send(pets);
});


router.get('/pet/:id', async (req, res, next) => {
  let singlePet = await pet.read(req.params.id);
  res.status(200).send(singlePet);
});


router.post('/pet', async (req, res, next) => {
  let newPet = await pet.create(req.body);
  res.status(200).send(newPet);
});


router.put('/pet/:id', async (req, res, next) => {
  await pet.update(req.body, { where: {id: req.params.id} });

  const updatedPet = await pet.findByPk(req.params.id);
  res.status(200).send(updatedPet);
});


router.delete('/pet/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    let deletedPet = await pet.findByPk(req.params.id);
    await pet.destroy({where: {id}});
    res.status(200).json(deletedPet);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
