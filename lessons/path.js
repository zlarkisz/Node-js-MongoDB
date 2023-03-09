const path = require("path");

console.log(path.join(__dirname, "first", "second", "third"));
console.log(path.join(__dirname, "..", "..")); // go up two directories
console.log(path.resolve("first", "second", "third")); // absolute path
const fullPath = path.resolve(__dirname, "first", "second", "third");
console.log(path.parse(fullPath)); // parse path into object
console.log(path.sep); // path separator
console.log(path.isAbsolute(fullPath)); // check if path is absolute
console.log(path.basename(fullPath)); // get file name
console.log(path.extname(fullPath)); // get file extension

// --------------------

const siteURL = "http://localhost:8080/user?id=1";
const url = new URL(siteURL);

console.log(url);
