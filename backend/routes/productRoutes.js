const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin-only Route for Creating a New Product
router.post("/", protect, admin, createProduct);

module.exports = router;
