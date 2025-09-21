const mongoose = require("mongoose");

const FactCheckSchema = new mongoose.Schema({
  text: { type: String, required: true },
  result: { type: String, required: true },
  confidence: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FactCheck", FactCheckSchema);
