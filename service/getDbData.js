
const Fortunes= require('../model/FortunesArray');

const getDbData = async ()=> {
    try {
    const data = await Fortunes.find({}); 
        console.log(data[0]);
        return data[0].data;
    } catch(err) {
        console.error(err);
    };
};

module.exports = getDbData;