const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || process.env.ALT_PORT;


app.use(cors());
app.use('/api', apiRouter);





app.listen(port, ()=> {
    console.log(`server is listening on ${port}`);
});