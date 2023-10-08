const express = require("express");
const peopleRouter = require("./routes/people");
const auth = require("./routes/auth");

const app = express();

app.use(express.static("./methods-public")); // static assets
app.use(express.urlencoded({ extended: false })); // parses icoming requests with urlencoded payloads, here basically form data. {extended: false} allows to parse data with querystring library. Because of this we are getting the form data in the req.body.
app.use(express.json()); // parses incoming requests with JSON payloads. {name : nameValue}

app.use("/api/people", peopleRouter);
app.use("/login", auth);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
