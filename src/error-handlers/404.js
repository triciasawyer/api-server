"use strict";

module.exports = (req, res, next) => {
  res.status(404).json({
    error: 404,
    route: req.baseUrl,
    message: "Not Found",
  });
};

/*
  export an anonymous function to be used as middleware for handling 404 Not Found errors
*/
