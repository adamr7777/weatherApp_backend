const mongoose = require('mongoose');

const connectDb = async ()=> {
    const MONGO_DB_URI_WEATHER = process.env.MONGO_DB_URI_WEATHER;
    const settings = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };

    try {
        await mongoose.connect(MONGO_DB_URI_WEATHER, settings);
    } catch(err) {
        console.error(err);
    };
};

module.exports = connectDb;