const express = require("express");

const app = express();

const PORT = process.env.port || 5000;

app.get("/", (req, res) => res.send("APi rinnimg"));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
