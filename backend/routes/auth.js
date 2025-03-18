require("dotenv").config(); // Load .env variables
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET; // Change this in production

// Register a new user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials!" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token, user: { username: user.username, numCorrectQs: user.numCorrectQs, numAnsweredQs: user.numAnsweredQs } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to fetch user data
router.get("/user", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from the Authorization header
  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify the token
    const user = await User.findById(decoded.id); // Get user from the database using the decoded token ID
    res.json(user); // Send user data as a response
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

module.exports = router;
