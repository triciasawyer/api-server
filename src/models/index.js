"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const pet = require("./pet");
const owner = require("./owner");

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

// db singleton
const sequelizeDb = new Sequelize(DATABASE_URL);

// create our working and connected pet database model
const petModel = pet(sequelizeDb, DataTypes);
const ownerModel = owner(sequelizeDb, DataTypes);

module.exports = { sequelizeDb, petModel, ownerModel };

/*
  import sequelize by destructuring the main database function and the datatypes
  import the schemas for the database
  declare the database url by pulling it from the env file

  initialize a database singleton with the url

  create models out of the imported schemas

  export
*/
