const Product = require("../models/product");

const products = async (req, res) => {
  try {
    const response = await Product.find();
    if (!response) {
      res.status(404).json({ message: "No product found" });
      return;
    }
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(`products : ${error}`);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.find({ _id: id });

    return res.status(200).json(data);
  } catch (error) {
    console.log(`products : ${error}`);
  }
};

const menproducts = async (req, res) => {
  try {
    const response = await Product.find({ category: "men" });
    if (!response) {
      res.status(404).json({ message: "No product found" });
      return;
    }
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(`products : ${error}`);
  }
};

const womenproducts = async (req, res) => {
  try {
    const response = await Product.find({ category: "women" });
    if (!response) {
      res.status(404).json({ message: "No product found" });
      return;
    }
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(`products : ${error}`);
  }
};

module.exports = { products, menproducts, womenproducts, getProductById };
