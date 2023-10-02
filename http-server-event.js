// Node server extends EventEmitter, below is the example which portrays it

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.send("Welcome!");
// });

// We can create a server using EventEmitterAPI
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome!");
});
// We have created an event 'request' which'll be emitted by server itself, server can listen for it, respond to it

server.listen(3000);
