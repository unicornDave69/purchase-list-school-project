const Ajv = require("ajv");
const ajv = new Ajv();
const { createRecord } = require("../../dao/shoppinglist-dao");

const schema = {
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
  required: ["title"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    const record = req.body;
    const valid = ajv.validate(schema, record);

    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const createdRecord = await createRecord(record);
    res.status(201).json(createdRecord);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
