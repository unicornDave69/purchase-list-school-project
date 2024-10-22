const express = require("express");
const app = express();
const shoppingListRoutes = require("./controller/ShoppingList");
require("./db/connection");

const port = 8000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use("/shoppingList", shoppingListRoutes); // Use shopping list routes

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
