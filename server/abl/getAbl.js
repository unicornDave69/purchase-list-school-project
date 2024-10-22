const { getRecord } = require("../../dao/shoppinglist-dao");

async function GetAbl(req, res) {
  try {
    const { id } = req.params;
    const record = await getRecord(id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(record);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
