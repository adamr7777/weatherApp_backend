
const FortunesCookie= require('../model/FortunesArray');

const getDbData = async ()=> {
    try {
    const data = await FortunesCookie.find({}); 
        console.log(data);
        return data;
    } catch(err) {
        console.error(err);
    };
};

module.exports = getDbData;