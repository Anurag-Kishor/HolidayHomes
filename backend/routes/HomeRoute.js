const express = require('express');
const { 
    getRentalsBasedOnProperties, getAllLocations
    } = require('../controllers/HomeController');
const router = express.Router();
const {authenticateToken} = require('../middleware/Authorization')


//GET 
router.get('/location', authenticateToken, getAllLocations);
router.get('/search', authenticateToken, getRentalsBasedOnProperties)

module.exports = router;