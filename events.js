// Events - for this we use event module in node.js

const EventEmitter = require("events");

// If you want to make custom events then we need to make an instance by extending the class

const customEvent = new EventEmitter();

// .on - listens the event - .on('eventName', function - what this event should do when envoked)
customEvent.on("response", (name, id) => {
  console.log(`Name : ${name} Id : ${id} Data received!`);
});

// Imp Points
// 1. We can have mutiple methods for the same event i.e. response has two methods here
// 2. Order matters, first we listen then we emit the event
customEvent.on("response", (name, id) => {
  console.log("Data send!");
});

// envoking the response event - emit -> to send out something
// 3. We can pass arguemwnts while emiting the events
customEvent.emit("response", "John", 34);
