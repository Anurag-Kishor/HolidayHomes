const BookingService = require('../services/BookingService');
const Booking = require('../models/Booking')

const getAllBookings = async() => {
    try {
        
    } catch (error) {
        
    }
}  

const getBookingsByUserId = async() => {
    try {
        
    } catch (error) {
        
    }
}  

const getBookingsByDate = async() => {
    try {
        
    } catch (error) {
        
    }
}  

const confirmBooking = async(req, res) => {
    try {
        const data = req.body;
        let booking = new Booking();

        booking.initModel(
            data.rentalId,
            data.userId,
            data.bookFrom,
            data.bookTo,
            data.amount,
            data.numberOfRooms,
            data.numberOfGuests
        )

        //const result = await BookingService.confirmBooking(booking);
        res.status(result.status).send(result);
    } catch (error) {
        res.status(401).send({success: false, error: error.message});
    }
}  

module.exports = {
    getAllBookings, 
    getBookingsByUserId,
    getBookingsByDate,
    confirmBooking
}