const mongoose = require("mongoose");
const { Schema } = mongoose;

const hachaFoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15,
  },
  priceA: {
    type: Number,
    required: true,
    maxlength: [10, "太貴了吧"],
  },
  priceB: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
    maxlength: 15,
  },
});

const HachaFood = mongoose.model("HachaFood", hachaFoodSchema);
module.exports = HachaFood;
