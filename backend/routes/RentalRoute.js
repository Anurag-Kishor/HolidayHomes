const express = require("express");
const router = express.Router();
const {
  addRental,
  updateRental,
  getRentalById,
  setAvailability,
  postReview,
  addService,
  averageRating,
  getAllServices,
  getRentalTypes,
  getRentalReviews,
  getAllRentals,
  getRentalsWithBookingInfo
} = require("../controllers/RentalController");
const { checkForHost } = require("../middleware/CheckForHost");

//GET rentals
router.get('/info/service', getAllServices)
router.get('/info/rentalType', getRentalTypes)
router.get('/info/all', getAllRentals)
router.get('/info/booking/rentals/:host_id', getRentalsWithBookingInfo)
router.get('/info/:id', getRentalById)
router.get('/:rental_id/avgReview', averageRating)
router.get('/:rental_id/allReviews', getRentalReviews)


// POST / ADD rental
router.post("/", addRental);
router.post("/:rental_id/review", postReview);
router.post("/service", addService);

// PUT / UPDATE rental
router.put("/", updateRental);
router.put("/:id/availability", setAvailability);

module.exports = router;
