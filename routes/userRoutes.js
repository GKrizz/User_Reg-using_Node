// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const {
  registerUser,
  loginUser,
  updateUserProfile,
} = require("../controllers/userController");

const router = express.Router();

router.get("/gobal", async (req, res) => {
    
  res.status(200).json({ message: "" });
});

router.post("/register", registerUser);

router.post("/login", loginUser);

// Update Profile Route
router.post("/update", updateUserProfile);
module.exports = router;
