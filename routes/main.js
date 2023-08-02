const express = require('express');

const sendImg = require('../controllers/sendImg');
const sendWeatherToday = require('../controllers/sendWeatherToday');


const router = express.Router();


router.route('/random-image').post(sendImg);
router.route('/weather-today').post(sendWeatherToday);


module.exports = router;