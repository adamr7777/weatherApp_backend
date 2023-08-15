const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const fortunesSchema = new Schema({
    data: [String]
});

module.exports = mongoose.model('Fortunes', fortunesSchema); 