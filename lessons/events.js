const Emitter = require("events");
const emitter = new Emitter();

const callback = (data, second) => {
  console.log("Message received:", data);
  console.log("Second argument:", second);
};

emitter.on("message", callback);

const dotenv = require("dotenv");
dotenv.config();

const MESSAGE = process.env.MESSAGE || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "You have no message");
}

emitter.once("message", callback);

emitter.emit("message", "You have no message");
emitter.emit("message", "You have no message");
emitter.emit("message", "You have no message");

emitter.removeAllListeners();
emitter.removeListener("message", callback);
