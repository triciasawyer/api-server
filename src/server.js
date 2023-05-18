'use strict';


const express = require('express');
const cors = require('cors');
const wildAnimalRouter = require('./routes/wildRoute');
const petRouter = require('./routes/petRoute');
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

const app = express();


app.use(cors());
app.use(express.json());

app.use(wildAnimalRouter);
app.use(petRouter);


app.get('/', (req, res, next) => {
  res.status(200).send('Proof of life!');
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => { app.listen(port, () => console.log('Server running on', port)); };

module.exports = { start, app };
