const express = require('express');
const router = express.Router();
const {
    addRental,
    updateRental,
    getRentalById,
    getRentalsByHostId,
    getRentalsBasedOnProperties,
    getMostBookedRentals,
    getMostRatedRentals,
    setAvailability,
    postReview,
    addService
} = require('../controllers/RentalController')

//GET rentals
router.get('/:id', getRentalById)
router.get('/search', getRentalsBasedOnProperties)
router.get('/:host_id/review', addService)

// POST / ADD rental
router.post('/', addRental);
router.post('/:host_id/review', postReview)

// PUT / UPDATE rental 
router.put('/', updateRental);
router.put('/:id/availability', setAvailability);




router.get('/:host_id', getRentalsByHostId) //put this in host route 


// put mostBooked and mostRated in Home Service