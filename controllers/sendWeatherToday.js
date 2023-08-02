
const getWeatherToday = require('../api/getWeatherToday');

const sendWeatherToday = async (req, res)=> {
    const {lat, lon} = req.body;
    if(!lat || !lon) return res.status(400);
    const data = await getWeatherToday(lat, lon);

    res.status(200).json({msg: 'success!', data});
};


module.exports = sendWeatherToday;