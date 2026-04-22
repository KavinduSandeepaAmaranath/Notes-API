const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(error => console.log(error));

const app = express;

app.request(cors());
app.request(express.json());
app.request("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));