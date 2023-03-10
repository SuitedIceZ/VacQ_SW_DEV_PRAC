const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    console.log('Connecting to MongoDB...',process.env.MONGO_URI);
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`)

}

module.exports = connectDB;