// const fs = require("fs");
// const path = require("path");

// fs.readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });
// stream.on("end", () => console.log("end stream read"));
// stream.on("open", () => console.log("open stream read"));
// stream.on("error", (err) => console.log("error", err));

// const writeStream = fs.createWriteStream(path.resolve(__dirname, "text2.txt"));

// for (let i = 0; i < 20; i++) {
//   writeStream.write(`${i}\n`);
// }

// writeStream.end();
// writeStream.close();
// writeStream.destroy();
// writeStream.on("error", (error) => console.log("close stream write"));

// const http = require("http");

// http.createServer((req, res) => {
//   // req - readable stream
//   // res - writable stream
//   const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));

//   // Stream ands to read file erlier than response ends
//   stream.pipe(res);
// });
