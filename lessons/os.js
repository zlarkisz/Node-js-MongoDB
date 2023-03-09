const os = require("os");
const cluster = require("cluster");

// console.log(os.platform()); // darwin
// console.log(os.arch()); // arm64
// console.log(os.cpus().length); // array of objects

const cpus = os.cpus();

// if (cluster.isMaster) {
//   for (let i = 0; i < cpus.length - 2; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log("Worker", worker.process.pid, "died");
//     if (code === ) {
//       cluster.fork();
//     } else {
//       console.log("Worker", worker.process.pid, "died");
//     }
//   });
// } else {
//   console.log("Worker", process.pid, "started");

//   setInterval(() => {
//     console.log("Worker", process.pid, "is working");
//   }, 5000);
// }
