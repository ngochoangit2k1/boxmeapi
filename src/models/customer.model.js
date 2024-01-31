const mongoose = require("mongoose");
const validator = require("validator");
const CustomerSchema = mongoose.Schema({

  lastName: {
    type: String,
  },
  firstName: { type: String },


  phoneNumber: {
    type: String,
    // unique: true,
  },

  email: {
    type: String,
    // unique: true,
  },
  website: {
    type: String,
  },
  currentMarket: {
    type: String,
  },
  currentSelling: {
    type: String,
  },
  orderVolume: {
    type: String,
  },
  detail: {
    type: String,
  },

});

module.exports = mongoose.model("user", CustomerSchema);
