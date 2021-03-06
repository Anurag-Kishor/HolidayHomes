const BookingService = require("../services/BookingService");
const Booking = require("../models/Booking");

const getAllBookings = async (req, res) => {
  try {
    const result = await BookingService.getAllBookings();
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
};


const getBookingsByUserId = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const result = await BookingService.getBookingsByUserId(userId);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
  }
};

const getBookingsByDate = async (req, res) => {
  try {
  } catch (error) {}
};


const confirmBooking = async (req, res) => {
  try {
    const data = req.body;
    let booking = new Booking();

    booking.initModel(
      data.rentalId,
      data.userId,
      data.bookFrom,
      data.bookTo,
      data.amount,
      data.numberOfGuests
    );

    console.log("CONTROLLER: ");
    console.log(booking);

    const result = await BookingService.confirmBooking(booking);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

const calculateFinalCost = async (req, res) => {
  try {
    const data = req.body;

    const result = await BookingService.calculateFinalCost(
      data.bookFrom,
      data.bookTo,
      data.rentalId
    );
    return res.status(result.status).json(result);
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

const checkIfRentalIsBooked = async (req, res) => {
  try {
    const data = req.body;
    console.log("DATA");
    console.log(data);
    const result = await BookingService.checkIfRentalIsBooked(
      data.rentalId,
      data.bookFrom,
      data.bookTo
    );
    return res.status(200).json({ data: result });
  } catch (error) {
    res.status(401).json({ status: 401, success: false, error: error.message });
  }
};

const getBookingsByRentalId = async(req, res) => {
    try {
        const rental_id = req.params.rental_id;
        const result = await BookingService.getBookingsByRentalId(rental_id);
        return res.status(200).json(result);

    } catch (error) {
    res.status(401).json({ status: 401, success: false, error: error.message });
    }
}

const getRentalsWithBookings = async(req, res) => {
  try {
    const host_id=req.params.host_id;
    const result = await BookingService.getRentalsWithBookings(host_id);
    return res.status(200).json(result);

  } catch (error) {
    res.status(401).json({ status: 401, success: false, error: error.message });
    
  }
}

module.exports = {
  getAllBookings,
  getBookingsByUserId,
  getBookingsByDate,
  confirmBooking,
  calculateFinalCost,
  checkIfRentalIsBooked,
  getBookingsByRentalId,
  getRentalsWithBookings
};
