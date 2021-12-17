const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/Authorization')
const { 
    getAllUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    checkIfUserIsHost
    } = require('../controllers/UserController');


router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;