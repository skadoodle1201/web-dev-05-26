const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb://dbUser:2A4sm9ekznxEGe9C@cluster0-shard-00-00.qsvctw.mongodb.net:27017,cluster0-shard-00-01.qsvctw.mongodb.net:27017,cluster0-shard-00-02.qsvctw.mongodb.net:27017/?ssl=true&replicaSet=atlas-11wsg9-shard-0&authSource=admin",
    );
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.error(err);
  }
}
// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await mongoose.connection.close();
// }

module.exports = {
  connectToMongoDB,
};
