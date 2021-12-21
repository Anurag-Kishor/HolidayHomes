const pool = require('../db');

const getAllBookings = async() => {
    try {

        //fetching details from BOOKING, USERS, RENTAL, LOCATION tables.
        const bookings = await pool.query(
            'SELECT b.Booking_id, b.Trip_start_date, b.Trip_end_date, b.NumberOfTravellers, b.TripCost, b.Booking_date, ' +
            'r.Name , r.Description, r.AddressLine1, r.AddressLine2, r.numberOfRooms, l.city, l.state, l.country, ' +
            'u.firstname, u.lastname FROM Booking b ' +
            'JOIN Users u ON b.traveler_id = u.user_id ' + 
            'JOIN Rental r ON r.Rental_id = b.Rental_id ' + 
            'JOIN Location l ON l.Location_id = r.Location_id');
        return {status: 200, success: true, data: bookings.rows}
        
    } catch (error) {
        return {status: 401, success: false, error: error.message}
        
    }
} 

const getBookingsByUserId = async(userId) => {
    try 
    {
        //fetching details from BOOKING, USERS, RENTAL, LOCATION tables.
        const bookings = await pool.query(
            'SELECT b.Booking_id, b.Trip_start_date, b.Trip_end_date, b.NumberOfTravellers, b.TripCost, b.Booking_date, ' +
            'r.Name as RentalName, r.Description, r.AddressLine1, r.AddressLine2, r.numberOfRooms, l.city, l.state, l.country, ' +
            'u.firstname, u.lastname FROM Booking b WHERE b.Traveler_id=$1' +
            'JOIN Users u ON Booking.Traveler_id = Users.User_id' + 
            'JOIN Rental r ON Rental.Rental_id = Booking.Rental_id' + 
            'JOIN Location l ON Location.Location_id = Rental.Location_id', [userId])
        return {status: 200, success: true, data: bookings.rows}
            
    } catch (error) {
        return {status: 401, success: false, error: error.message}
    }
}

const confirmBooking = async(data) => {
    try {
        let today = new Date().toISOString().slice(0, 10)

        const check = await checkIfRentalIsBooked(data.rentalId, data.bookFrom, data.bookTo);
        if(check.data) return ({status: 401, success: false, error: 'The date is not available'})
        
        const amount = await calculateFinalCost(data.bookFrom, data.bookTo, data.rentalId);
        const result = await pool.query('INSERT INTO Booking(rental_id, trip_start_date, trip_end_date, numberOfTravellers, tripCost, booking_date, traveler_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                        [data.rentalId, data.bookFrom, data.bookTo, data.numberOfGuests, amount.data, today, data.userId]);
        
        return {status: 200, success: true, data: result.rows}               

    } catch (error) {

        return {status: 401, success: false, error: error.message}
        
    }
}

const calculateFinalCost = async(start_date, end_date, rental_id) => {
    try {
        console.log(rental_id)
        const rental = await pool.query('SELECT priceperday from Rental');
        console.log("Price: " + rental)
    } catch (error) {
        
    }
}
/*const calculateFinalCost = async(start_date, end_date, rental_id) => {
    try {
        console.log("ID: " + rental_id)
        const rentalCost = await pool.query('SELECT * FROM Rental');
        console.log('Cost: ' + rentalCost);
        const start = new Date(start_date);
        const end = new Date(end_date);
        var Difference_In_Time = end.getTime() - start.getTime();
        var days = Difference_In_Time / (1000 * 3600 * 24);

        const amount = parseInt(rentalCost.rows[0].priceperday) * days;

        return {status: 200, success: true, data: amount}                
    } catch (error) {
        return {status: 401, success: false, error: error.message}
    }
}*/

const checkIfRentalIsBooked = async(rental_id, start_date, end_date) => {
    try {
        console.log('Start: ' + start_date);
        console.log('End: ' + end_date);
        const check = await pool.query('SELECT * FROM booking WHERE rental_id=$1 AND (trip_start_date BETWEEN $2 AND $3 OR trip_end_date BETWEEN $2 AND $3)', [rental_id, start_date, end_date]);

        if(check.rowCount > 0) {
            return {success: true, data: true};
        }
       // console.log(check);
        return {success: true, data: false};
    } catch (error) {
        return {success: false, data: false};
    }
}
// const checkIfRentalIsBooked = async(start_date, end_date) => {
//     try {
//         console.log('Start Date: ' + start_date)
//         const check = await pool.query('SELECT * from Booking');
        
//         console.log('Data' + check);
//         return true;
//     } catch (error) {
        
//     }
// }




module.exports = {
    getAllBookings,
    getBookingsByUserId,
    confirmBooking,
    calculateFinalCost,
    checkIfRentalIsBooked
}