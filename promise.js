// Asynchronus or Promise Execution

const { readFile, writeFile } = require("fs").promises;

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// For writeFile we need to make another func same as reedFile and need to wrap everything again, we can use util module of node to promisify a method.

// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// but this whole thing can also be skipped by just adding .promises to require('fs')

// getText("./text1.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// Since we need to .then & .catch the returned promise everytime we call the getText function, a simple way to do it is using async await.

const start = async () => {
  try {
    const first = await readFile("./text1.txt", "utf8");
    const second = await readFile("./text2.txt", "utf8");

    // const first = await readFilePromise("./text1.txt", "utf8");
    // const second = await readFilePromise("./text2.txt", "utf8");

    console.log(first, ":", second);

    await writeFile("./text3.txt", `Result : ${first} : ${second}`);

    // await writeFilePromise("./text3.txt", `Result : ${first} : ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();
