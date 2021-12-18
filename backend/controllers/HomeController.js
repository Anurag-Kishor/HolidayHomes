const HomeService = require('../services/HomeService')

const getRentalsBasedOnProperties = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getMostBookedRentals = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getMostRatedRentals = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getAllLocations = async(req, res) => {
    try {
        const result = await HomeService.getAllLocations();
        return res.status(result.status).json({success: true, data: result.data})
    } catch (error) {
        return res.status(404).json({success: false, error: error.message })
    }
}
module.exports = {
    getRentalsBasedOnProperties,
    getMostBookedRentals,
    getMostRatedRentals,
    getAllLocations
}