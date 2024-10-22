const Ajv = require("ajv");
const ajv = new Ajv();
const { updateRecord } = require("../../dao/shoppinglist-dao");

const updateSchema = {
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

async function UpdateAbl(req, res) {
  try {
    const { id } = req.params;
    const record = req.body;
    const valid = ajv.validate(updateSchema, record);

    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
    }

    const updatedRecord = await updateRecord(id, record);
    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(updatedRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
