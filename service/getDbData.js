
const FortunesArray = require('../model/FortunesArray');

const getDbData = async ()=> {
    try {
        const data = await FortunesArray.findOne(); 
        return data;
    } catch(err) {
        console.error(err);
    };
};

module.exports = getDbData;