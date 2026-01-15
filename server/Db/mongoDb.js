const mongoose = require("mongoose");

exports.getConnect = async () =>{
    try {
        // console.log(process.env.mongo_url);
        
        await mongoose.connect(process.env.mongo_url);
        console.log("Mongoose connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}