const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname, "dir1", "dir2", "dir3"), {
//   recursive: true,
// });

// console.log("Before");

// fs.mkdir(path.resolve(__dirname, "dir"), (error) => {
//   if (error) {
//     console.log(error);

//     return;
//   }

//   console.log("Directory created");
// });

// console.log("After");

// fs.rmdir(path.resolve(__dirname, "dir"), (error) => {
//   if (error) {
//     throw error;
//   }
// });

// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "Hello world, updated",
//   (error) => {
//     if (error) {
//       throw error;
//     }

//     console.log("File created");

//     fs.appendFile(
//       path.resolve(__dirname, "test.txt"),
//       "Added text to the end of the file",
//       (error) => {
//         if (error) {
//           throw error;
//         }

//         console.log("File created");
//       }
//     );
//   }
// );

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (error) => {
      if (error) {
        reject(error.message);
      }

      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (error) => {
      if (error) {
        reject(error.message);
      }

      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "UTF-8" }, (error, data) => {
      if (error) {
        reject(error.message);
      }

      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (error) => {
      if (error) {
        reject(error.message);
      }

      resolve();
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "Hello world")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
//   console.log("File removed")
// );

const dotenv = require("dotenv");
dotenv.config();

const text = process.env.TEXT || "";
console.log(process.env.TEXT);

writeFileAsync(path.resolve(__dirname, "test.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, "count.txt"),
      `Words count: ${count}`
    )
  )
  .then(() => removeFileAsync(path.resolve(__dirname, "test.txt")));
