const Rental = require("../models/Rental");
const RentalService = require("../services/RentalService");

const addRental = async (req, res) => {
  // console.log(req.body);

  try {
    const data = req.body;

    let rental = new Rental();

    rental.initModel(
      data.name,
      data.description,
      data.addressLine1,
      data.addressLine2,
      data.location_id,
      data.dateFrom,
      data.dateTo,
      data.pricePerDay,
      data.rentalTypeId,
      data.numberOfRooms,
      data.numberOfGuests,
      data.services,
      data.host_id,
      data.numberOfBeds
    );
    console.log(rental);
    // console.log(host);
    const result = await RentalService.createRental(rental);
    // console.log("Imhere");
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const updateRental = async (req, res) => {
  try {
  } catch (error) {}
};

const getRentalById = async (req, res) => {
  try {
    console.log(req.params);
    const result = await RentalService.getRentalById(req.params.id);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const setAvailability = async (req, res) => {
  try {
  } catch (error) {}
};

const postReview = async (req, res) => {
  try {
    const data = req.body;
    const rental_id = req.params.rental_id;
    const result = await RentalService.postReview(rental_id, data);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const averageRating = async (req, res) => {
  try {
    const rental_id = req.params.rental_id;
    const result = await RentalService.calculateAverageReview(rental_id);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

//Add new services to service table
const addService = async (req, res) => {
  try {
    const services = req.body.services;
    const result = await RentalService.addService(services);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const result = await RentalService.getAllServices();
    res.status(result.status).json(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getRentalTypes = async (req, res) => {
  try {
    const result = await RentalService.getRentalTypes();
    res.status(result.status).json(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getRentalReviews = async (req, res) => {
  try {
    const rental_id = req.params.rental_id;
    const result = await RentalService.getRentalReviews(rental_id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

const getAllRentals = async (req, res) => {
  try {
    const result = await RentalService.getAllRentals();
    res.status(result.status).json(result);
  } catch (error) {
    res.status(401).send({ success: false, error: error.message });
  }
};

module.exports = {
  addRental,
  updateRental,
  getRentalById,
  setAvailability,
  postReview,
  addService,
  averageRating,
  addService,
  getAllServices,
  getRentalTypes,
  getRentalReviews,
  getAllRentals,
};
