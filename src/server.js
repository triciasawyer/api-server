'use strict';

const express = require('express');
const cors = require('cors');
// const foodRouter = require('./routes/food');
const app = express();


app.use(cors());
app.use(express.json());
//   app.use(foodRouter);


app.get('/', (req, res, next) => {
    res.status(200).send('Proof of life');
});

const start = (port) => { app.listen(port, () => console.log('Server running on', port)) };


module.exports = { start, app };