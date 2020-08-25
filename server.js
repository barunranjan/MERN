const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// Define Route
app.use("/api/users", require("./route/api/users"));

app.use("/api/posts", require("./route/api/posts"));

app.use("/api/auth", require("./route/api/auth"));

app.use("/api/profile", require("./route/api/profile"));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
