const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const USER = {
  email: "click@here.com",
  password: "1010",
};

app.post("/Login", (req, res) => {
  const { email, password } = req.body;

  if (email === "click@here.com" && password === "1010") {
    return res.json({ success: true });
  }

  res.status(401).json({ success: false });
});


app.listen(5000, function () {
  console.log("Server started...");
});