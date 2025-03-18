require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // to allow cross-origin requests
const authRoutes = require("./routes/auth"); // Import auth routes

const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON data from request body

// Use the auth routes
app.use("/auth", authRoutes);

// Connect to MongoDB (replace with your actual MongoDB URI)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
