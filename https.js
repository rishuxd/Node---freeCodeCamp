const http = require("http");
const { readFileSync } = require("fs");

const Homepage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(Homepage);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About");
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end(`
    404 Not found!
    <a href="/">Homepage</a>`);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
