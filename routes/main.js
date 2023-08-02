const express = require('express');

const sendImg = require('../controllers/sendImg');
const sendWeatherToday = require('../controllers/sendWeatherToday');
const sendForecast = require('../controllers/sendForecast');


const router = express.Router();


router.route('/random-image').post(sendImg);
router.route('/weather-today').post(sendWeatherToday);
router.route('/weather-forecast').post(sendForecast);


module.exports = router;