const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:dRvQHLkzFQEchjw5@cluster0.ieamxho.mongodb.net/weather4";

mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

module.exports = connectionString; // Do not edit/remove this line
