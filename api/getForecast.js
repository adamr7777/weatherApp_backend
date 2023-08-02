const axios = require('axios');



const getForecast = async (lat, lon)=> {
    const WEATHER_API_URL = process.env.WEATHER_API_URL; 
    const API_ID = process.env.API_ID;
    const weatherApiEndpoint = `forecast?lat=${lat}&lon=${lon}&appid=${API_ID}&units=metric`;
    
    try {
        const res = await axios.get(WEATHER_API_URL + weatherApiEndpoint);
        return res.data;
    } catch(err) {
        console.error(err);
    };
};


module.exports = getForecast;