const mongoose = require("mongoose");

//const URI = "mongodb+srv://nnj16:nnj16@cluster0.wmc1l.mongodb.net/TransportDB?retryWrites=true&w=majority";
const URI = "mongodb+srv://admin:admin123@cluster0.qh5xs.mongodb.net/salonDB?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log("Database Connected");
}

module.exports = connectDB;