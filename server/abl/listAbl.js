const { listRecords } = require("../../dao/shoppinglist-dao");

async function ListAbl(req, res) {
  try {
    const records = await listRecords();
    res.status(200).json(records);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
