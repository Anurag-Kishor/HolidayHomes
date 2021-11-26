const Host = require("../models/Host");
const HostService = require('../services/HostService');

const createHost = async(req, res) => {
    try {
        const data = req.body;

        let host = new Host();

        host.initModel(
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
        
       // console.log(host);
        const result = await HostService.createHost(host);
       // console.log("Imhere");
        res.status(result.status).send(result);
        
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }

}

const updateHost = async(req, res) => {
    try {

        const id = req.params.id;
        const data = req.body;
        //console.log(id);
       // console.log(data);
        let host = new Host();

        host.initModel(
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

        const result = await HostService.updateHost(id, host);
        res.status(result.status).send(result);

    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

const getAllHosts = async(req, res) => {
    
    try {
        const result = await HostService.getAllHosts();    
        res.status(result.status).send(result);
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }

}

const getHostById = async(req, res) => {
    try {

        const id = req.params.id;
        const result = await HostService.getHostById(id);
        res.status(result.status).send(result);

    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

const deleteHost = async(req, res) => {
    try {
        const id = req.pramams.id;
        const result = await HostService.deleteHost(id);
        res.status(result.status).send(result);
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}

const getRentalsByHostId = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllHosts, 
    getHostById,
    createHost,
    updateHost,
    deleteHost,
    getRentalsByHostId,
};