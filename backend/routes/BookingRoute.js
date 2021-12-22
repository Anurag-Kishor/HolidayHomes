const express = require("express");
const {
  getAllBookings,
  getBookingsByUserId,
  getBookingsByDate,
  confirmBooking,
  calculateFinalCost,
  checkIfRentalIsBooked,
  getBookingsByRentalId
} = require("../controllers/BookingController");
const router = express.Router();

//takes trip start_date,end_date, rental_id in body
router.get('/rental/cost', calculateFinalCost)
router.get('/rental/:rental_id', getBookingsByRentalId)
router.get('/:user_id', getBookingsByUserId);
//include date in body
router.get('/date', getBookingsByDate);
router.get('/', getAllBookings);

router.post('/availability', checkIfRentalIsBooked)





//takes booking details
router.post("/", confirmBooking);

module.exports = router;
