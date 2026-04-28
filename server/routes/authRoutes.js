const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

const router = express.Router(); 

router.post("/register", async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User ({
            name,
            email,
            password: hashedPassword
        });

        await user.save();
        res.json({ message: "User registered "});

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", async (req, res) => {
    const { email, password} = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json("Invalid credentials");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json("Invalid Credentials");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ token, user });

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

