// backend/routes/orderRoutes.js
const express = require("express");
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

// Route for creating a new order (protected)
router.post("/", protect, addOrderItems);

// Route to get an order by ID (protected)
router.get("/:id", protect, getOrderById);

// Route to update an order to paid (protected)
router.put("/:id/pay", protect, updateOrderToPaid);

// Route to get logged-in user's orders (protected)
router.get("/myorders", protect, getMyOrders);

// Admin-only route to get all orders
router.get("/", protect, admin, getAllOrders);

// Admin-only route to mark order as delivered
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

module.exports = router;
