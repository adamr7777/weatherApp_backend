
const getRandomImg = require('../api/getRandomImg');



const sendImg = async (req, res)=> {
    const {weather, timeOfDay} = req.body;
    if(!weather || !timeOfDay) return res.status(400);
    const data = await getRandomImg(weather, timeOfDay);
    res.status(200).json({msg: 'success!', data});
};



module.exports = sendImg;