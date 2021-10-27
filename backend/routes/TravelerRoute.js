const express = require('express');
const router = express.Router();
const { getAllTravelers, getTravelerById, createTraveler, updateTraveler } = require('../controllers/TravelerController');

router.get('/', getAllTravelers);
router.get('/:id', getTravelerById);
router.post('/', createTraveler);
router.put('/:id', updateTraveler);
module.exports = router;