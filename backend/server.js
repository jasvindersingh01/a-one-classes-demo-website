const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "https://aoneclasses.in",
      "http://aoneclasses.in"
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.send("A-One Classes Backend is running 🚀");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});