const express = require("express");
const router = express.Router();

const {
  getAllRecords,
  removeById,
  createRecord,
} = require("../dao/shoppingList-dao");

router.post("/list/create", async (req, res) => {
  try {
    const newList = await createRecord(req.body);
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/list/get", async (req, res) => {
  try {
    const lists = await getAllRecords();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/list/delete/:id", async (req, res) => {
  try {
    await removeById(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
