const { Schema, default: mongoose } = require('mongoose')

const computerSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category:{
        type: { type: String, required: true },
        brand: { type: String, required: true },
        model: { type: String, required: true },
    },
    processor: {
        type:{ type: String, required: false },
        speed:{ type: String, required: false },
    },
    storage:{
        ram_size: { type: String, required: false },
        type: { type: String, required: false },
        disk: { type: String, required: false }
    },
    display:{
        graphics_card: { type: String, required: false },
        size: { type: String, required: false }
    },
    operation_system: { type: String, required: false },
    prices:{
        regular_price: { type: mongoose.Decimal128, required: true },
        sale_price: { type: mongoose.Decimal128, required: false },
    },
    quantity: { type: Number, required: true },
    rating: { type: Number, min:0,max:5},
    year_release: { type: Date, default: Date.now },
    images:
        [{
        image: {type: String,required:false}
        }],
  },
  { timestamps: true }
)

module.exports = computerSchema