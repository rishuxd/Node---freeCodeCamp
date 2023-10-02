const os = require("os");
const path = require("path");
const fs = require("fs");

console.log(os.userInfo());
console.log(path.sep);

const absolutePath = path.resolve(__dirname, "names.js");

console.log(`Resolved path: ${absolutePath}`);
