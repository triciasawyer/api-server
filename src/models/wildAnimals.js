'use strict';


const wildAnimals = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define('animals', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    group: {
      type: DataTypes.ENUM,
      values: ['wolf', 'lion', 'tiger', 'elephant', 'giraffe'],
      allowNull: true,
    },
  });
};


module.exports = wildAnimals;
