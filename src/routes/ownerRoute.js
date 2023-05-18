'use strict';


const express = require('express');
const router = express.Router();
const { ownerModel } = require('../models/owner');


router.get('/owner', async (req, res, next) => {
  let owners = await ownerModel.findAll();
  res.status(200).send(owners);
});

router.get('/owner/:id', async (req, res, next) => {
  let singleOwner = await ownerModel.findByPk(req.params.id);
  res.status(200).send(singleOwner);
});


router.post('/owner', async (req, res, next) => {
  let newOwner = await ownerModel.create(req.body);
  res.status(200).send(newOwner);
});


module.exports = router;
