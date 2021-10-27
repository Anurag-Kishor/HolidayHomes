const express = require('express');
const app = express();
const traveler = require('./routes/TravelerRoute');
const admin = require('./routes/AdminRoute')
const pool = require("./db");

//middlewares
app.use(express.json());

//routes
app.use('/traveler', traveler);
app.use('/admin', admin);


app.listen(5000, console.log('Connected to port 5000'));