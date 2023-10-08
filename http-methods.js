const express = require("express");
const { people } = require("./data");

const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false })); // parses icoming requests with urlencoded payloads, here basically form data. {extended: false} allows to parse data with querystring library. Because of this we are getting the form data in the req.body.
app.use(express.json()); // parses incoming requests with JSON payloads. {name : nameValue}

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the name." });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Pleas provide the credentials.");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id : ${id}.` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id : ${id}.` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
