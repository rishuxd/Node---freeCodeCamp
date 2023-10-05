const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("Hello About");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send("I'm from the ALL method which I've used for the error handling.");
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
