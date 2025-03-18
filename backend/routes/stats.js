const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).json({ error: "Access denied" });

  try {
    const verified = jwt.verify(token, "your_secret_key");
    req.user = verified;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Update user's quiz stats
router.post("/update", authMiddleware, async (req, res) => {
  const { numCorrectQs, numAnsweredQs } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.numCorrectQs += numCorrectQs;
    user.numAnsweredQs += numAnsweredQs;
    await user.save();

    res.json({ message: "Stats updated!", numCorrectQs: user.numCorrectQs, numAnsweredQs: user.numAnsweredQs });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
