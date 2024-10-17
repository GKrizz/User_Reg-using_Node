const mongoose = require("mongoose");


const mongoURL = "mongodb://127.0.0.1:27017/reg_db";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose
  .createConnection(mongoURL)
  .on("open", () =>
    console
      .log("connect success")
      ).on("error", () => console.log("connect failed")
  );

module.exports = connection;
