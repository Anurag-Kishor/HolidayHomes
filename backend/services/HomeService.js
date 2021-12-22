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

const getRentalsBasedOnLocation = async (location_id) => {
  try {
    console.log(location_id)

    const result = await pool.query('SELECT * FROM Rental WHERE location_id=$1', [location_id]);
    return {status: 200, success: true, data: result.rows}
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getRentalsBasedOnDate = async (start_date, end_date) => {
  try {
    console.log(start_date, end_date)

    const result = await pool.query('SELECT * FROM Rental WHERE (trip_start_date < $1) AND (trip_end_date > $2)', [start_date, end_date]);
    
    return {status: 200, success: true, data: result.rows}
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getRentalsBasedOnDateAndLocation = async (location_id, start_date, end_date) => {
  try {
    try {
      console.log(location_id, start_date, end_date)
      const result = await pool.query('SELECT * FROM Rental WHERE (trip_start_date BETWEEN $1 AND $2 AND trip_end_date BETWEEN $1 AND $2)  AND location_id=$2', [start_date, location_id]);
      
      return {status: 200, success: true, data: result.rows}
    } catch (error) {
      return { status: 404, success: false, error: error };
    }
  } catch (error) { }
};
module.exports = {
  getAllLocations,
  getMostBookedRentals,
  getMostRecentRentals,
  getRentalsBasedOnLocation,
  getRentalsBasedOnDate,
  getRentalsBasedOnDateAndLocation,
};
