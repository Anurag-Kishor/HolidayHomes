const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middleware/Authorization')
const { 
    getAllUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    makeHost
    } = require('../controllers/UserController');



router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.post('/', createUser);
router.put('/:id', authenticateToken, updateUser);
router.put('/host/:user_id', authenticateToken, makeHost)
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;