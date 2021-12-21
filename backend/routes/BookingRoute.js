const express = require('express');
const {
    getAllBookings, 
    getBookingsByUserId,
    getBookingsByDate,
    confirmBooking,
    calculateFinalCost,
    checkIfRentalIsBooked
} = require('../controllers/BookingController');
const router = express.Router();


//takes trip start_date,end_date, rental_id in body
router.get('/availability', checkIfRentalIsBooked)
router.get('/rental/cost', calculateFinalCost)
router.get('/', getAllBookings);
router.get('/:user_id', getBookingsByUserId);
//include date in body
router.get('/date', getBookingsByDate);



//takes booking details
router.post('/', confirmBooking);



module.exports = router;

