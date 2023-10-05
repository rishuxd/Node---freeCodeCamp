const express = require("express");
const app = express();
const { products, people } = require("./data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
