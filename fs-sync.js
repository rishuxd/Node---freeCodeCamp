// Synchronus Execution

const fs = require("fs");

console.log("START");

const content = fs.readFileSync("./text1.txt", "utf8");
console.log(content);

fs.writeFileSync("./text2.txt", `Result : ${content}`);

console.log("END");
