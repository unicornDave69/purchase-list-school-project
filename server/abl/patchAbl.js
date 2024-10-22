const Ajv = require("ajv");
const ajv = new Ajv();
const { patchRecord } = require("../../dao/shoppinglist-dao");

const patchSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          quantity: { type: "integer" },
        },
        required: ["name", "quantity"],
      },
    },
  },
  additionalProperties: false,
};

async function PatchAbl(req, res) {
  try {
    const { id } = req.params;
    const record = req.body;
    const valid = ajv.validate(patchSchema, record);

    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
    }

    const patchedRecord = await patchRecord(id, record);
    if (!patchedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(patchedRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = PatchAbl;
