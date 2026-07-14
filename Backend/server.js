const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("inventory APIs");
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
