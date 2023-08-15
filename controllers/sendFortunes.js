

const getDbData = require('../service/getDbData');
const data = require('../db');

const sendFortunes = async (req, res) => {
    try {
        // const data = await getDbData();
        res.status(200).json({data});
    } catch(err) {
        console.error(err);
        res.status(400);
    };
};

module.exports = sendFortunes;
