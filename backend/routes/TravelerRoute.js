const express = require('express');
const router = express.Router();
const { getAllTravelers, getTravelerById } = require('../controllers/TravelerController');

router.get('/', getAllTravelers);
router.get('/:id', getTravelerById);


module.exports = router;