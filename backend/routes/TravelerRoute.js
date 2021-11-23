const express = require('express');
const router = express.Router();
const { 
    getAllTravelers, getTravelerById, createTraveler, 
    updateTraveler, deleteTraveler 
    } = require('../controllers/TravelerController');

router.get('/', getAllTravelers);
router.get('/:id', getTravelerById);
router.post('/', createTraveler);
router.put('/:id', updateTraveler);
router.delete('/:id', deleteTraveler)
module.exports = router;