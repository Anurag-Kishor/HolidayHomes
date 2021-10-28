const express = require('express');
const router = express.Router();

const { 
    getAllHosts, getHostById, createHost, 
    updateHost, deleteHost 
    } = require('../controllers/HostController');

router.get('/', getAllHosts);
router.get('/:id', getHostById);
router.post('/', createHost);
router.put('/:id', updateHost);
router.delete('/:id', deleteHost);

module.exports = router;
