const express = require("express");
const app = express();
const { products, people } = require("./data.js");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID) //params always returns in string format
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    return res.status(404).send("Product does not exist.");
  }
});

// params can get more complex for ex.
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

// Query String
// Whatever comes after the ? in the url is the query string
// It could be like /api/v1?search=a&limit=2 where route is /api/v1
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  // Sorting the products based on search query provided in the url
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  // Limiting the number of products to be displayed based on the limit query provided in the url
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  //Check for no products found
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search.");
    return res.status(200).json({ success: true, data: [] }); // This is the better way to do it
  }

  // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client - This error occurs when you try to send multiple responses to the same request - that's why we use return in conditional statements.

  return res.status(200).json(sortedProducts);
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
