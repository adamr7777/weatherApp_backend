const axios = require('axios');


const getRandomImg = async (weather, timeOfDay)=> {
    const RANDOM_IMG_API = process.env.RANDOM_IMG_API;      
    const RANDOM_IMG_KEY = process.env.RANDOM_IMG_KEY;
    const randomImgEndpoint = `?query=${weather},${timeOfDay},nature&orientation=portrait&client_id=${RANDOM_IMG_KEY}`;

    try {
        const res = await axios.get(RANDOM_IMG_API + randomImgEndpoint);
        return res.data;
    } catch(err) {
        console.error(err);
    }
};

module.exports = getRandomImg;