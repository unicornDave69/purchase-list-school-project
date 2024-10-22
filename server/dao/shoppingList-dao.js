const ShoppingList = require("../models/ShoppingList");

// Create a new shopping list
async function createRecord(record) {
  try {
    const newList = new ShoppingList(record);
    return await newList.save();
  } catch (error) {
    throw { code: "failedToCreateRecord", message: error.message };
  }
}

// Get all shopping lists
async function getAllRecords() {
  try {
    return await ShoppingList.find({});
  } catch (error) {
    throw { code: "failedToReadRecords", message: error.message };
  }
}

// Remove a shopping list by ID
async function removeById(id) {
  try {
    return await ShoppingList.findByIdAndDelete(id);
  } catch (error) {
    throw { code: "failedToRemoveRecord", message: error.message };
  }
}

module.exports = {
  createRecord,
  getAllRecords,
  removeById,
};
