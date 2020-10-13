const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const elementSchema = new Schema({
  id: String,
  passed: Boolean,
});

module.exports = mongoose.model("ProgressElements", elementSchema);
