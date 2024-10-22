const express = require("express");
const app = express();
const shoppingListRoutes = require("./controller/ShoppingList");
require("./db/connection");

const port = 8000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
