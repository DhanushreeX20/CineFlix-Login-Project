const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const USER = {
  email: "check@here.com",
  password: "1010"
};

app.get("/login", function (req, res) {
  const { email, password } = req.query;
  if (email === USER.email && password === USER.password) {
     console.log("Login Successful ");
    console.log("Email:", email);
    console.log("Password:", password);
      res.send( true,"Login successful" ) 
  }
  else{
    console.log("Login failed , Wrong Data !");
    console.log("Email:", email);
    console.log("Password:", password);
  res.send( false,"Invalid credentials" )

  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

