'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const pets = require('./pets');
const wildAnimals = require('./wildAnimals');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// db singleton
const sequelizeDb = new Sequelize(DATABASE_URL);

// create our working and connected pet database model
const petModel = pets(this.sequelizeDb, DataTypes);
const wildAnimalModel = wildAnimals(this.sequelizeDb, DataTypes);

module.exports = {sequelizeDb, petModel, wildAnimalModel};
