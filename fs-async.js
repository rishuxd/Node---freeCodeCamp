// Asynchronus Execution

const fs = require("fs");

console.log("START");

fs.readFile("./text1.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = res;
  fs.writeFile("./text3.txt", `Result : ${data}`, () => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`res of text3.txt : ${res}`);
  });
});

console.log("END");
