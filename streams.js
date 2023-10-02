//Streams - used to read and write sequentially

// Ex. While reading a file usinf fs module, we were storing data in variables and were reading the whole file, but if the file is too big then this method will fail, a better approach would be using read stream option

const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./bigFile.txt", "utf8");
    // res.end(text);
    // content length is too big

    const fStream = fs.createReadStream("./bigFile.txt", "utf8");
    fStream.on("open", () => {
      fStream.pipe(res);
    });
    fStream.on("error", (err) => {
      res.end(err);
    });
    // now the sent data is in chuck
  })
  .listen(5000);
