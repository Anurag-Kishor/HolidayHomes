const express = require('express');
const router = express.Router();

const { 
    getAllHosts, getHostById, createHost, 
    updateHost, deleteHost, getRentalsByHostId
    } = require('../controllers/HostController');


router.get('/', getAllHosts);
router.get('/:id', getHostById);
router.post('/', createHost);
router.put('/:id', updateHost);
router.delete('/:id', deleteHost);
router.get('/:host_id', getRentalsByHostId)

module.exports = router;
