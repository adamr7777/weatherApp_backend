const express = require('express');

const sendFortunes = require('../controllers/sendFortunes');



const router = express.Router();

router.route('/fortune-cookies').get(sendFortunes);


module.exports = router;