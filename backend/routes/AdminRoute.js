const express = require('express');
const { addRole } = require('../controllers/AdminController');
const router = express.Router();

// add role
router.post('/role', addRole);

module.exports = router;