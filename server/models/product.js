const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  product: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, default: "men" },
  price: { type: String, required: true },
  provider: { type: String, required: true },
  url: { type: String },
});

const Product = model("Product", productSchema);

module.exports = Product;
