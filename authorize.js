const authorize = (req, res, next) => {
  console.log("Authorize");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 }; // we added a new property to the req object and receive it in the next middleware.
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
