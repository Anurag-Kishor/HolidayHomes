const HomeService = require("../services/HomeService");

const getRentalsBasedOnProperties = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    if (data.location_id && data.start_date && data.end_date) {
      const result = await HomeService.getRentalsBasedOnDateAndLocation(data.location_id, data.start_date, data.end_date);
      return res.status(result.status).json(result);

    }else if(data.location_id){
      const result = await HomeService.getRentalsBasedOnLocation(data.location_id);
      return res.status(result.status).json(result);

    }else if (data.start_date && data.end_date){
      const result = await HomeService.getRentalsBasedOnDate(data.start_date, data.end_date);
      return res.status(result.status).json(result);
    }
  } catch (error) {
    return res.status(404).json({ success: false, error: error.message });

  }
};

const getMostBookedRentals = async (req, res) => {
  try {
    const result = await HomeService.getMostRecentRentals();
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
