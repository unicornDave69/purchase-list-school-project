const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/WTBBTW/Shopping Lists")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
