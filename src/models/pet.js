'use strict';


const pet = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define('pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['dog', 'cat', 'guinea pig', 'hamster', 'bird'],
      allowNull: true,
    },
  });
};


module.exports = pet;

/*
  export a schema for sequelize to use as a model.
  Give the schema name, age, and type properties.
*/
