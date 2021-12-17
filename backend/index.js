const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const adminRouter = require('./routes/AdminRoute')
const rentalRouter = require('./routes/RentalRoute')
const bookingRouter = require('./routes/BookingRoute');
const userRouter = require('./routes/UserRoute');

const authRouter = require('./routes/AuthRoute');
const {authenticateToken} = require('./middleware/Authorization')

const app = express();

//middlewares

const corseOptions = {credentials: true, origin: process.env.URL || '*'}
app.use(cors(corseOptions));
app.use(express.json());
app.use(cookieParser());
//routes

app.use('/api/auth', authRouter)
app.use('/api/rental', authenticateToken, rentalRouter)
app.use('/api/admin', authenticateToken, adminRouter);
app.use('/api/user', authenticateToken, userRouter)
app.use('/api/booking', authenticateToken, bookingRouter)

app.listen(5000, console.log('Connected to port 5000'));