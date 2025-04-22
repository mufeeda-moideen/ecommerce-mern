const mongoose = require('mongoose');
module.exports = () =>{
    try{
        //mongoDB Connection
        mongoose.connect(
            //connection string change according to your string
            "mongodb://localhost:27017/ecommerce"
        );
        mongoose.connection.on('connected', () => {
        console.log('✅ Connected to MongoDB');
        });
        mongoose.connection.on('error', (err) => {
        console.error(`❌ MongoDB connection error: ${err}`);
        });
    } catch(err){
        console.log(err);
    }
}