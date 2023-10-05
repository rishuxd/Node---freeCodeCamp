const app = require("express")();
const morgan = require("morgan");
const authorize = require("./authorize.js");
const logger = require("./logger.js");

// Middleware sits in between res & req (req -> middleware -> res) and does the job. It is a function that has access to the req and res objects. It can execute any code, make changes to the req and res objects, end the req-res cycle, and call the next middleware in the stack.

/*
PASSED IT TO THE LOGGER.JS FILE
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("Testing");
->sending a response here will stop the request and ends the middleware cycle. Unless we send a response, the request will be hanged. So we need to call next() to move on to the next middleware.
  next();
};
*/

// But what if we have multiple routes? We need to add the middleware to each route. That is not a good idea. We can use app.use() to use the middleware for all the routes.

// options for miidleware -> our own / third party ex. morgan / express

// app.use(epxress.static('/public')); -> its a builtin express middleware. It will serve all the static files in the public folder. We can access the files in the public folder from the browser. Ex: http://localhost:3000/styles.css

// app.use("/about", morgan("tiny")); -> GET /about?user=john 304 - - 1.000 ms

app.use([logger, authorize]);
//we can give route as well. If we don't give any route, it will be applied to all the routes. Ex: app.use("/api", logger) -> this will be applied to all the routes that starts with /api

//we pass multiple middleware in an array.

app.get("/", logger, (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  // What if we want the same thing in /about? That is not a good idea. We can do it in a function and pass it to the route handler.
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
