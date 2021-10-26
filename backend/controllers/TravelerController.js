const Traveler = require("../models/Traveler");


const getAllTravelers = async(req, res) => {
    console.log('IM traveler');

    let traveler = new Traveler();
    traveler.initModel({ 
        FirstName: "Anurag",    
        LastName: "Kakkan",
        Email: "Lmao",
        Password: "lol",
        AddressLine1: "1",
        AddressLine2: "2",
        City: "Admedabad",
        State: "Gujarat",
        Country: "India"
    })
    
    res.send(traveler.getAddress());
}

const getTravelerById = async(req, res) => {
    console.log('IM traveler');
    res.send('Hello');
}

module.exports = {
    getAllTravelers, 
    getTravelerById
};