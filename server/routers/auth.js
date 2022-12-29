const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/config");


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email or phone is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .json({
        id: user._id,
        name: user.name,
        email: user.email,
        auth: true,
        token,
      });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    return newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ message: "Error saving user" });
      }
      return res.json({ id: user._id });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
