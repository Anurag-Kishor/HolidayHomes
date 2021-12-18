const pool = require('../db');

const getAllLocations = async() => {

    try {
        const locations = await pool.query("SELECT * FROM location");
        return {status: 200, success: true, data: locations.rows};
    } catch (error) {
        return {status: 404, success: false, error: error}
    }
}

module.exports = {
    getAllLocations
}