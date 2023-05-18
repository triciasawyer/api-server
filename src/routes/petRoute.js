"use strict";

const express = require("express");
const router = express.Router();
const { petModel } = require("../models/pet");

router.get("/pet", async (req, res, next) => {
  let pets = await petModel.findAll();
  res.status(200).send(pets);
});

router.get("/pet/:id", async (req, res, next) => {
  let singlePet = await petModel.findByPk(req.params.id);
  res.status(200).send(singlePet);
});

router.post("/pet", async (req, res, next) => {
  let newPet = await petModel.create(req.body);
  res.status(200).send(newPet);
});

// router.put('', async (req, res, next) => {
//   let addPet = await petModel
// });

// router.delete('', async (req, res, next) => {
//   let deletePet = await petModel
// });

module.exports = router;

/*
  import express and create a router singleton
  import the pet model to use sequelize functions in this custom route.
  handle various routes and calls to the API for querying database
*/
