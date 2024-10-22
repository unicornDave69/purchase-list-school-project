const { deleteRecord } = require("../../dao/shoppinglist-dao");

async function DeleteAbl(req, res) {
  try {
    const { id } = req.params;
    const deletedRecord = await deleteRecord(id);

    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(204).send(); // No content
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
