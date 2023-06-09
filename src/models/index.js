'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const owner = require('./owner');
const pet = require('./pet');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// db singleton
const sequelizeDb = new Sequelize(DATABASE_URL);

// create our working and connected database models
const ownerModel = owner(sequelizeDb, DataTypes);
const petModel = pet(sequelizeDb, DataTypes);

// create associations
ownerModel.hasMany(petModel);
petModel.belongsTo(ownerModel);


module.exports = {sequelizeDb, petModel, ownerModel,
  owner: new Collection(ownerModel),
  pet: new Collection(petModel),
};
