const express = require('express');

const sendImg = require('../controllers/sendImg');


const router = express.Router();


router.route('/random-image').get(sendImg);



module.exports = router;