
let mongoose = require('mongoose');
require('dotenv').config();

module.exports = async function () {
    try {
        await mongoose.connect(process.env.ATLASDB);

        console.log('Successfully connected to MongoDB!');
        console.log('Database:', mongoose.connection.name);

        return mongoose;
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        throw err;
    }
};
