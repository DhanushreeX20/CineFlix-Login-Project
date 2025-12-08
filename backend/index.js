const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors({
  origin: "https://cineflix-login-clone.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));






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

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});


