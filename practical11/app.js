const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "semv",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database.");
});

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 - Page not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.method == "POST" && req.url === "/signin") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { signinUsername, signinPassword } = queryString.parse(body);

      db.query(
        "select * from users where username = ? and password = ?",
        [signinUsername, signinPassword],
        (err, result) => {
          if (err) throw err;

          if (result.length > 0) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Login successful");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("No user found.");
          }
        }
      );
    });
  } else if (req.method == "POST" && req.url === "/signup") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const { signupUsername, signupPassword } = queryString.parse(body);
      console.log(signupUsername, signupPassword);

      db.query(
        "insert into users values(?,?)",
        [signupUsername, signupPassword],
        (err, result) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("Signup successful");
        }
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 - Page not found");
  }
});

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000.`);
});
