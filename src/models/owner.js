"use strict";

const owner = (sequelizeDb, DataTypes) => {
  return sequelizeDb.define("owner", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    location: {
      type: DataTypes.ENUM,
      values: ["Iowa", "Texas", "Kansas", "Oregon", "California"],
      allowNull: true,
    },
  });
};

module.exports = owner;

/*
  export a schema for sequelize to use as a model.
  Give the schema name, age, and location properties.
*/
