'use strict';


const wildAnimals = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define('animals', {
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    animal: {
      type: DataTypes.INTEGER,
      values: ['wolf', 'lion', 'tiger', 'elephant', 'giraffe'],
      allowNull: true,
    },

    type: {
      type: DataTypes.ENUM,
      values: ['fish', 'reptile', 'mammal', 'bird', 'amphibian'],
      allowNull: true,
    },
  });
};


module.exports = wildAnimals;
