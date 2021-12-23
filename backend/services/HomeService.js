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
    console.log('here')
    // const result = await pool.query(
    //   "select rental_id, COUNT(*) NumberOfBookings From Booking b GROUP BY rental_id ORDER BY count(*) desc;"
    // );

    const result = await pool.query(
      "select r.*, u.firstname, u.lastname, u.email, u.phonenumber from rental r JOIN (select b.rental_id, COUNT(*) NumberOfBookings From Booking b GROUP BY b.rental_id ORDER BY count(*) desc) as t ON t.rental_id = r.rental_id " +
      "JOIN users u ON u.user_id = r.host_id"
    );
    return { status: 200, success: true, data: result.rows };
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getMostRecentRentals = async () => {
  try {
    //console.log("IN MOST RECENT");
    const result = await pool.query("SELECT * FROM rental ORDER BY time DESC");
    //console.log(result.rows);
    return { status: 200, success: true, data: result.rows };
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getRentalsBasedOnLocation = async (location_id) => {
  try {
   // console.log(location_id)

    const result = await pool.query('SELECT * FROM Rental WHERE location_id=$1', [location_id]);
    return {status: 200, success: true, data: result.rows}
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getRentalsBasedOnDate = async (start_date, end_date) => {
  try {
    console.log(start_date, end_date)

    const result = await pool.query('SELECT * FROM Rental WHERE datefrom <= $1::date AND dateto >=$2::date', [start_date, end_date]);
    return {status: 200, success: true, data: result.rows}
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
};

const getRentalsBasedOnDateAndLocation = async (location_id, start_date, end_date) => {
 
    try {
      console.log(location_id, start_date, end_date)
      const result = await pool.query('SELECT * FROM Rental WHERE datefrom <= $1::date AND dateto >=$2::date AND location_id=$3', [start_date, end_date, location_id]);
      
      return {status: 200, success: true, data: result.rows}
    } catch (error) {
      return { status: 404, success: false, error: error };
    }
  
};

const getRentalsBasedOnGuests = async(data) => {
  try {
    console.log(data)
    if(data.numberofguests && data.start_date && data.end_data && data.location_id) {
      console.log('In here')
      const result = await pool.query('SELECT * FROM Rental WHERE datefrom <= $1::date AND dateto >=$2::date AND location_id=$3 AND numberofguests<=$4', [data.start_date, data.end_date, data.location_id, data.numberofguests]);
      return {status: 200, success: true, data: result.rows}
    }else if(data.numberofguests && data.start_date && data.end_data) {
      console.log('In here1')

      const result = await pool.query('SELECT * FROM Rental WHERE datefrom <= $1::date AND dateto >=$2::date AND numberofguests<=$3', [data.start_date, data.end_date, data.numberofguests]);
      return {status: 200, success: true, data: result.rows}
    }else if(data.numberofguests && data.location_id){
      console.log('In here2')

      const result = await pool.query('SELECT * FROM Rental WHERE numberofguests <= $1 AND location_id=$2', [data.numberofguests, data.location_id]);
      return {status: 200, success: true, data: result.rows}
    }else {
      console.log('In here 3')

      const result = await pool.query('SELECT * FROM Rental WHERE numberofguests<=$1', [data.numberofguests]);
      return {status: 200, success: true, data: result.rows}
    }
  } catch (error) {
    return { status: 404, success: false, error: error };
  }
} 

module.exports = {
  getAllLocations,
  getMostBookedRentals,
  getMostRecentRentals,
  getRentalsBasedOnLocation,
  getRentalsBasedOnDate,
  getRentalsBasedOnDateAndLocation,
  getRentalsBasedOnGuests
};
