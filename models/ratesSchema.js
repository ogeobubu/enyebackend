const mongoose = require("mongoose");

const RatesSchema = mongoose.Schema({
  rate: Object,
  base: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const RatesModel = mongoose.model("Rate Schema", RatesSchema);

module.exports = RatesModel;
