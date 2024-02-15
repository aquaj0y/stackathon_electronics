const { Schema } = require("mongoose");

//creating a new Object called a Actor, that follows the rules that Mongoose defines through the schema
const SmartHome = new Schema(
  {
    name: { type: String, required: true },
    img: {type: String, required: true},
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: [String], required: true },
    productDetails: { type: String, required: true },
    review: { type: String, required: true },
    onSale: {type: Boolean, required: true}
  },
  { timestamps: true }
);

//exporting this thing called a Actor and all of its information so other files can use it
module.exports = SmartHome;

