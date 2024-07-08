const express = require("express");
const getproduct = require("../controller/product-controller");
const router = express.Router();

router.route("/product").get(getproduct.products);

router.route("/product/:id").get(getproduct.getProductById);

router.route("/menproduct").get(getproduct.menproducts);

router.route("/womenproduct").get(getproduct.womenproducts);

module.exports = router;
