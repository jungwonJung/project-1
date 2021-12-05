const mongoose = require("mongoose");

module.exports = () => {
  function connect() {
    mongoose.connect(
      "mongodb+srv://wjdros1501:12341234@cluster0.1nsnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function (err) {
        if (err) {
          console.error("mongodb connection error", err);
        }
        console.log("mongodb connected");
      }
    );
  }
  connect();
  mongoose.connection.on("disconnected", connect);
};
