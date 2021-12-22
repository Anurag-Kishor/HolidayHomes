const express = require("express");
const {
  getRentalsBasedOnProperties,
  getAllLocations,
  getMostBookedRentals,
  getMostRecentRentals,
} = require("../controllers/HomeController");
const router = express.Router();
const { authenticateToken } = require("../middleware/Authorization");

//GET
router.get("/location", authenticateToken, getAllLocations);
router.get("/mostBooked", authenticateToken, getMostBookedRentals);
router.get("/mostRecent", authenticateToken, getMostRecentRentals);
router.post("/search", authenticateToken, getRentalsBasedOnProperties);

module.exports = router;
