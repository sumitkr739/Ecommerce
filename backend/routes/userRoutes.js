// backend/routes/userRoutes.js
const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const router = express.Router();

// Route for user registration
router.post("/register", registerUser);

// Route for user login
router.post("/login", authUser);

module.exports = router;
