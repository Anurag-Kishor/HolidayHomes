const Traveler = require("../models/Traveler");
const TravelerService = require('../services/TravelerService');

const createTraveler = async(req, res) => {
    try {
        const data = req.body;

        let traveler = new Traveler();

        traveler.initModel(
            data.firstName,    
            data.lastName,
            data.email,
            data.password,
            data.addressLine1,
            data.addressLine2,
            data.city,
            data.state,
            data.country,
            data.phoneNumber
        )
        
       // console.log(traveler);
        const result = await TravelerService.createTraveler(traveler);
       // console.log("Imhere");
        res.status(result.status).send(result);
        
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }

}

const updateTraveler = async(req, res) => {
    try {

        const id = req.params.id;
        const data = req.body;
        //console.log(id);
       // console.log(data);
        let traveler = new Traveler();

        traveler.initModel(
            data.firstName,    
            data.lastName,
            data.email,
            data.password,
            data.addressLine1,
            data.addressLine2,
            data.city,
            data.state,
            data.country,
            data.phoneNumber
        )

        const result = await TravelerService.updateTraveler(id, traveler);
        res.status(result.status).send(result);

    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

const getAllTravelers = async(req, res) => {
    
    try {
        const result = await TravelerService.getAllTravelers();    
        res.status(result.status).send(result);
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }

}

const getTravelerById = async(req, res) => {
    try {

        const id = req.params.id;
        const result = await TravelerService.getTravelerById(id);
        res.status(result.status).send(result);

    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

const deleteTraveler = async(req, res) => {
    try {
        const id = req.pramams.id;
        const result = await TravelerService.deleteTraveler(id);
        res.status(result.status).send(result);
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

module.exports = {
    getAllTravelers, 
    getTravelerById,
    createTraveler,
    updateTraveler,
    deleteTraveler
};