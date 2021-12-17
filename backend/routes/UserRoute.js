const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/Authorization");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  checkIfUserIsHost,
} = require("../controllers/UserController");

router.get("/", authenticateToken, getAllUsers);
router.get("/:id", authenticateToken, getUserById);
router.post("/", createUser);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);
module.exports = router;
