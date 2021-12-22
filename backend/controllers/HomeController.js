const HomeService = require("../services/HomeService");

const getRentalsBasedOnProperties = async (req, res) => {
  try {
    const data = req.body;
    if (data.location_id && data.start_date && data.end_date) {
    }
  } catch (error) {}
};

const getMostBookedRentals = async (req, res) => {
  try {
    const result = await HomeService.getMostRecentRentals();
    console.log("Result: " + result);
    return res.status(result.status).json({ success: true, data: result.data });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
};

const getMostRecentRentals = async (req, res) => {
  try {
    console.log("IN HERE");
    const result = await HomeService.getMostRecentRentals();
    return res.status(result.status).json({ success: true, data: result.data });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const result = await HomeService.getAllLocations();
    return res.status(result.status).json({ success: true, data: result.data });
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });
  }
};
module.exports = {
  getRentalsBasedOnProperties,
  getAllLocations,
  getMostRecentRentals,
  getMostBookedRentals,
};
