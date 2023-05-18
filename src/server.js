"use strict";

const express = require("express");
const cors = require("cors");
const ownerRouter = require("./routes/ownerRoute");
const petRouter = require("./routes/petRoute");
const errorHandler = require("./error-handlers/500.js");
const notFound = require("./error-handlers/404.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use(ownerRouter);
app.use(petRouter);

app.get("/", (req, res, next) => {
  res.status(200).send("Proof of life!");
});

app.use("*", notFound);
app.use(errorHandler);

const start = (port) => {
  app.listen(port, () => console.log("Server running on", port));
};

module.exports = { start, app };

/*
  import express, cors, routers and error handlers
  create an express app singleton

  use global middleware
  use routers

  get a base route

  check for 404 error and general errors

  export the start function that makes the server listen for requests.
*/
