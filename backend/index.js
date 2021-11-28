const express = require('express');
const app = express();
const traveler = require('./routes/TravelerRoute');
const admin = require('./routes/AdminRoute')
const host = require('./routes/HostRoute')
const rental = require('./routes/RentalRoute')
//middlewares
app.use(express.json());

//routes
app.use('/rental', rental)
app.use('/traveler', traveler);
app.use('/admin', admin);
app.use('/host', host)

app.listen(5000, console.log('Connected to port 5000'));