const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const mainRouter = require('./routes/main');
const fortunesRouter = require('./routes/fortunes');
const connectDb = require('./config/connectDb');

connectDb();
const app = express();
const port = process.env.PORT || process.env.ALT_PORT;


app.use(cors());
app.use(express.json());
app.use('/api', mainRouter, fortunesRouter);



mongoose.connection.once('open', ()=> {
    console.log('the database is connected');
    
    app.listen(port, ()=> {
        console.log(`server is listening on ${port}`);
    });
});
