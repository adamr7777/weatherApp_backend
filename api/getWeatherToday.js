const axios = require('axios');


const getWeatherToday = async (lat, lon)=> {
    const API_ID = process.env.API_ID;
    const WEATHER_API_URL = process.env.WEATHER_API_URL; 
    const weatherApiEndpoint = `weather?lat=${lat}&lon=${lon}&appid=${API_ID}&units=metric`;
    
    try {
        const res = await axios.get(WEATHER_API_URL + weatherApiEndpoint);
        return res.data;
    } catch(err) {
        console.error(err);
    };
};

module.exports = getWeatherToday;