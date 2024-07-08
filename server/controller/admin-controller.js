const Contact = require("../models/contact");
const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/orders");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.find({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted Successfully..." });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(400).json({ message: "No Contacts Found!" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No Products found" });
    }

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.find({ _id: id });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProductData = req.body;

    const updatedData = await Product.updateOne(
      { _id: id },
      { $set: updateProductData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.deleteOne({ _id: id });
    return res.status(200).json({ message: "Product deleted Successfully..." });
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const { product, description, category, price, provider, url } = req.body;

    const productExist = await Product.findOne({ product });

    if (productExist) {
      return res.status(200).json({ message: "Product is already exist" });
    }

    const productCreated = await Product.create({
      product,
      description,
      category,
      price,
      provider,
      url,
    });

    res.status(200).json({
      message: "Product Save Successfull",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addProduct,
  getAllOrders,
};
