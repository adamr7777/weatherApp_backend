const axios = require('axios');


const getRandomImg = async (weather, timeOfDay)=> {
    const randomImg = 'https://api.unsplash.com/photos/random/';      
    const key = '&client_id=XYMe11wvf2H6WeG3VzMj5QFbkZlplD0WCK2BCYPGIfI'
    const topic = `?query=${weather},${timeOfDay},nature&orientation=portrait`;
    const res = await axios.get(randomImg + topic + key);
    return res.data;
};