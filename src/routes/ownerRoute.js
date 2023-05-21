'use strict';


const express = require('express');
const router = express.Router();
const { ownerModel, petModel } = require('../models');

router.get('/owner', async (req, res, next) => {
  let owners = await ownerModel.findAll();
  res.status(200).send(owners);
});


router.get('/ownerWithPets', async (req, res, next) => {
  let owners = await ownerModel.findAll({include: {model: petModel}});
  res.status(200).send(owners);
});


router.get('/ownerWithSinglePet/:id', async (req, res, next) => {
  let owners = await ownerModel.findAll({
    include: {model: petModel},
    where: {id: req.params.id},
  });

  res.status(200).send(owners);
});


router.get('/owner/:id', async (req, res, next) => {
  let singleOwner = await ownerModel.findAll({where: {id: req.params.id}});
  res.status(200).send(singleOwner);
});


router.post('/owner', async (req, res, next) => {
  let newOwner = await ownerModel.create(req.body);
  res.status(200).send(newOwner);
});


router.put('/owner/:id', async (req, res, next) => {
  await ownerModel.update(req.body, { where: {id: req.params.id} });

  const updateOwner = await ownerModel.findByPk(req.params.id);
  res.status(200).send(updateOwner);
});


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
