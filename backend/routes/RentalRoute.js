const express = require('express');
const router = express.Router();
const {
    addRental,
    updateRental,
    getRentalById,
    setAvailability,
    postReview,
    addService,
    averageRating
} = require('../controllers/RentalController')

//GET rentals
router.get('/:id', getRentalById)
router.get('/:rental_id/review', averageRating)

// POST / ADD rental
router.post('/', addRental);
router.post('/:rental_id/review', postReview)

// PUT / UPDATE rental 
router.put('/', updateRental);
router.put('/:id/availability', setAvailability);



module.exports = router;
