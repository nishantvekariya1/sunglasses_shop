const express = require("express");
const router = express.Router();

const orderController = require("../controller/order-controller.js");

router.route("/ordersdata").post(orderController.getOrder);

module.exports = router;
