const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(
      `mongodb+srv://user:user@cluster0.ypspcqu.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = connectDB;
