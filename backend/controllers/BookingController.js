const BookingService = require('../services/BookingService');
const Booking = require('../models/Booking')

const getAllBookings = async(req, res) => {
    try {
        const result = await BookingService.getAllBookings();
        return res.status(result.status).json(result)
    } catch (error) {
        return res.status(401). json({success: false, error: error.message})
    
    }
}  

const getBookingsByUserId = async(req, res) => {
    try {
        const userId = req.params.user_id;
        const result = BookingService.getBookingsByUserId(userId);
        return res.status(result.status).json(result)
    } catch (error) {
        return res.status(401). json({success: false, error: error.message})
    }
}  

const getBookingsByDate = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}  

const confirmBooking = async(req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        let booking = new Booking();

        booking.initModel(
            data.rentalId,
            data.userId,
            data.bookFrom,
            data.bookTo,
            data.amount,
            data.numberOfGuests
        )

        const result = await BookingService.confirmBooking(booking);
        res.status(result.status).json(result);
    } catch (error) {
        res.status(401).json({success: false, error: error.message});
    }
}  


const calculateFinalCost = async(req, res) => {
   /* try {
        const data = req.body;

        const result =await BookingService.calculateFinalCost(data.start_date, data.end_date, data.rental_id);
        return res.status(result.status).json(result)
    } catch (error) {
        res.status(401).json({success: false, error: error.message});
    }*/
}

const checkIfRentalIsBooked = async(req, res) => {
    try {
        console.log('here')

        // const data = req.body;

        // const result = BookingService.checkIfRentalIsBooked(data.bookFrom, data.bookTo, data.rentalId);
        // return res.status(200).json(result)

    } catch (error) {
       // res.status(401).json({success: false, error: error.message});
        
    }
}

module.exports = {
    getAllBookings, 
    getBookingsByUserId,
    getBookingsByDate,
    confirmBooking,
    calculateFinalCost,
    checkIfRentalIsBooked
}