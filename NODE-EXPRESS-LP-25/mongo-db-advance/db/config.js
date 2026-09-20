const mongoose = require("mongoose");

const connectMongo = async () => {
  await mongoose.connect(
    "mongodb://dbUser:2A4sm9ekznxEGe9C@cluster0-shard-00-00.qsvctw.mongodb.net:27017,cluster0-shard-00-01.qsvctw.mongodb.net:27017,cluster0-shard-00-02.qsvctw.mongodb.net:27017/blog_post?ssl=true&replicaSet=atlas-11wsg9-shard-0&authSource=admin&appName=Cluster0",
  );
  console.log("MongoDB Connected");
};

module.exports = connectMongo;
