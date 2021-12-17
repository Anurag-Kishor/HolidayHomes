const express = require('express');
const {
    getAllBookings, 
    getBookingsByUserId,
    getBookingsByDate,
    confirmBooking
} = require('../controllers/BookingController');
const router = express.Router();


router.get('/', getAllBookings);
router.get('/:user_id', getBookingsByUserId);
//include date in body
router.get('/date', getBookingsByDate);
router.post('/', confirmBooking);


module.exports = router;

