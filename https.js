const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Homepage");
  }
  if (req.url === "/about") {
    res.end("About");
  }
  res.end(`
    404 Not found!
    <a href="/">Homepage</a>`);
});

server.listen(3000);
