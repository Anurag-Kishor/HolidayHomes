const pool = require("../db");

const getAllLocations = async () => {
  try {
    const locations = await pool.query("SELECT * FROM location");
    return { status: 200, success: true, data: locations.rows };
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getMostBookedRentals = async () => {
  try {
    const result = await pool.query(
      "select rental_id, COUNT(*) NumberOfBookings From Booking b GROUP BY rental_id ORDER BY count(*) desc;"
    );
    return { status: 200, success: true, data: result.rows };
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getMostRecentRentals = async () => {
  try {
    console.log("IN MOST RECENT");
    const result = await pool.query("SELECT * FROM rental ORDER BY time DESC");
    console.log(result.rows);
    return { status: 200, success: true, data: result.rows };
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

module.exports = {
  getAllLocations,
  getMostBookedRentals,
  getMostRecentRentals,
};
