const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me via my gmail");
});

app.get("/about", (req, res) => {
  res.send("Hi, I'm Min");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
