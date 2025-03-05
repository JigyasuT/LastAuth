const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
  console.error("MongoDB connection string is missing");
  process.exit(1);
}
 
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
