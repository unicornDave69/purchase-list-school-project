const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  completed: { type: Boolean, default: false },
});

const shoppingListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [itemSchema],
});

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
