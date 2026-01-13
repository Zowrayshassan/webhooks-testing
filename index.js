const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => res.send("AgriPro Backend Runningsdjkldjskdldjls!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
