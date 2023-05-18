'use strict';


const pets = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define('pets', {
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
      values: ['dog', 'cat', 'guinea pigs', 'hamsters', 'ferrets'],
      allowNull: true,
    },
  });
};


module.exports = pets;
