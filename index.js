'use strict';


require('dotenv').config();

const { sequelizeDb } = require('./src/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3005;


sequelizeDb.sync()
  .then(() => {
    console.log('Successful connection!');
    start(PORT);
  });

