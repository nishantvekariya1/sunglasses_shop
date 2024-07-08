const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminController = require("../controller/admin-controller");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router
  .route("/products")
  .get(authMiddleware, adminMiddleware, adminController.getAllProducts);

router
  .route("/products/addproduct")
  .post(authMiddleware, adminMiddleware, adminController.addProduct);

router
  .route("/products/:id")
  .get(authMiddleware, adminMiddleware, adminController.getProductById);

router
  .route("/products/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateProductById);

router
  .route("/products/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteProductById);

router
  .route("/getallorders")
  .get(authMiddleware, adminMiddleware, adminController.getAllOrders);

module.exports = router;
