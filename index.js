const PORT = process.env.PORT || 3000;
const Application = require("./framework/Application");
const userRouter = require("./src/userRouter");
const jsonParser = require("./framework/parseJson");
const urlParser = require("./framework/parseUrl");
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(urlParser("http://localhost:3000"));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://blefgufin:123@node-js-course.nu0mbrv.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
