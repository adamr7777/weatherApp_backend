
const getForecast = require('../api/getForecast');

const sendForecast = async (req, res)=> {
    const {lat, lon} = req.body;
    if(!lat || !lon) return res.status(400);
    const data = await getForecast(lat, lon);
    res.status(200).json({msg: 'success!', data});
};

module.exports = sendForecast;