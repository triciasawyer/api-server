'use strict';


const express = require('express');
const router = express.Router();
const { ownerModel, petModel } = require('../models');

// get all owners
router.get('/owner', async (req, res, next) => {
  let owners = await ownerModel.findAll();
  res.status(200).send(owners);
});

// get owner with pets
router.get('/ownerWithPets', async (req, res, next) => {
  let owners = await ownerModel.findAll({include: {model: petModel}});
  res.status(200).send(owners);
});

// get owner with single pet
router.get('/ownerWithSinglePet/:id', async (req, res, next) => {
  let owners = await ownerModel.findAll({
    include: {model: petModel},
    where: {id: req.params.id},
  });
  res.status(200).send(owners);
});

// get single owner
router.get('/owner/:id', async (req, res, next) => {
  let singleOwner = await ownerModel.findAll({where: {id: req.params.id}});
  res.status(200).send(singleOwner);
});

// create new owner
router.post('/owner', async (req, res, next) => {
  let newOwner = await ownerModel.create(req.body);
  res.status(200).send(newOwner);
});

// update owner
router.put('/owner/:id', async (req, res, next) => {
  await ownerModel.update(req.body, { where: {id: req.params.id} });

  const updateOwner = await ownerModel.findByPk(req.params.id);
  res.status(200).send(updateOwner);
});

// delete owner
router.delete('/owner/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    let deletedOwner = await ownerModel.findByPk(id);
    await ownerModel.destroy({where: {id}});
    res.status(200).json(deletedOwner);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
