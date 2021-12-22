const pool = require('../db');
const format = require('pg-format');

const findLocationId = async(city, state, country) => {

    // fetch the location
    const data = await pool.query(
        "SELECT * FROM location WHERE city=$1 AND state=$2 AND country=$3",
        [city, state, country]
    )


    let locationId = null;  
    // if location exists then use that location_id
    if(data.rowCount > 0){
        locationId = data.rows[0].location_id;
        
    }else{  //else add the location to table and use that location_id
        const newLocation = await pool.query (
            "INSERT INTO location (city, state, country) VALUES ($1, $2, $3) RETURNING *",
            [city, state, country]
        )
        locationId = newLocation.rows[0].location_id;
    }
    return locationId;
}

const doesLocationIdExist = async(location_id) => {
    const result = await pool.query('SELECT * FROM location WHERE location_id=$1', [location_id]);
    if(result.rows.length === 0 ) return false;
    return true;
}

const createRental = async(rental) => {

    try {
        const check = await doesLocationIdExist(rental.locationId);
        
        if(!check) return {status : 400, success: false, error: "The location is not available!"};

        //Adding to RENTAL Table
        const rentalData = 'INSERT INTO RENTAL(name, description, addressline1, addressline2, location_id, available, datefrom, dateto, verified, priceperday,rentaltype, numberofrooms, numberofguests, host_id, numberOfBeds) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING rental_id'
        const rentalDataValues = [rental.name, rental.description, rental.addressLine1, rental.addressLine2, rental.locationId, rental.available, rental.dateFrom, rental.dateTo, false, rental.pricePerDay, rental.rentalTypeId, rental.numberOfRooms, rental.numberOfGuests, rental.host_id, rental.numberOfBeds]
        const res = await pool.query(rentalData, rentalDataValues)

        let servicesToAdd = []
        let rental_id = res.rows[0].rental_id;
        rental.services.forEach(async(service) => { 
            servicesToAdd.push([service, rental_id])
        })
        let query1 = format('INSERT INTO rental_services(service_id, rental_id) VALUES %L returning service_id', servicesToAdd);
        let {rows} = await pool.query(query1);
        return {status : 200, success: true};
    
    } 
    catch (error) {
        return {status : 400, success: false, error: error.message};

    } 
}

const updateRental = async(rental) => {
    try {
        
    } catch (error) {
        
    }
}

const getRentalById = async(id) => {
    try {

        const rental = await pool.query('SELECT r.name, r.description, r.addressLine1, r.addressLine2, l.city, l.state, l.country, to_char(r.dateFrom, \'YYYY-MM-DD\') as dateFrom, to_char(r.dateTo, \'YYYY-MM-DD\') as dateTo, r.pricePerDay, ' + 
                                        't.name as rentalType, r.numberOfRooms, r.numberOfGuests, r.numberOfBeds, ' + 
                                        'u.FirstName, u.LastName, u.PhoneNumber, u.Email from rental r ' + 
                                        'JOIN Location l ON r.location_id= l.location_id ' + 
                                        'JOIN Users u ON r.host_id=u.user_id ' + 
                                        'JOIN rental_type t on t.type_id=r.rentalType WHERE r.rental_id=$1', [id]);
       
       const result = await getRentalServices(id);

       if(result.data) {
            const services = {
               services: result.data
            }
           const rentalDetails = Object.assign(rental.rows[0], services);
           return {status : 200, success: true, data:rentalDetails};

        }else {
            return {status : 200, success: true, data:rental.rows};
        }

    } 
    catch (error) {

        return {status : 400, success: false, error: error};
    }
}

const getAllRentals = async() => {
    try {
        const rental = await pool.query('SELECT r.name, r.description, r.addressLine1, r.addressLine2, l.city, l.state, l.country, to_char(r.dateFrom, \'YYYY-MM-DD\') as dateFrom, to_char(r.dateTo, \'YYYY-MM-DD\') as dateTo, r.pricePerDay, ' + 
                                        't.name as rentalType, r.numberOfRooms, r.numberOfGuests, r.numberOfBeds, ' + 
                                        'u.FirstName, u.LastName, u.PhoneNumber, u.Email from rental r ' + 
                                        'JOIN Location l ON r.location_id= l.location_id ' + 
                                        'JOIN Users u ON r.host_id=u.user_id ' + 
                                        'JOIN rental_type t on t.type_id=r.rentalType');
        return {status : 200, success: true, data: rental.rows};
        
    } catch (error) {
        return {status : 400, success: false, error: error};
    }
}
const setAvailability = async(rental_id) => {
    try {
        
    } catch (error) {
        
    }
}

const postReview = async(rental_id, data) => {

    try {
     //   console.log(rental_id, data);
        const res = await pool.query('INSERT INTO rental_reviews(user_id, rental_id, description, stars) VALUES($1, $2, $3, $4)', [data.traveler_id, rental_id, data.description, data.stars]);
        return {status : 200, success: true};

    } catch (error) {
        return {status : 400, success: false, error: error.message};
    }
}

const getRentalReviews = async(rental_id) => {
    try {
        const res = await pool.query('SELECT user_id, description, stars FROM rental_reviews WHERE rental_id = $1', [rental_id]);
        return {status : 200, success: true, data: res.rows};

    } catch (error) {
        return {status : 400, success: false, error: error.message};
    } 
}
const calculateAverageReview = async(rental_id) => {
    try {
        const res = await pool.query('SELECT AVG(stars) FROM rental_reviews WHERE rental_id = $1', [rental_id]);
        const count = await pool.query('SELECT COUNT(*) FROM rental_reviews WHERE rental_id =$1', [rental_id]);
        return {status : 200, success: true, data: {avg: Math.ceil(res.rows[0].avg), count: count.rows[0].count}};
    } catch (error) {
        return {status : 400, success: false, error: error};
    }
}

const addService = async(services) => {
    try {

        services.forEach(async(service) => {
            const res = 
            await pool.query('INSERT INTO services(description) VALUES ($1) RETURNING service_id', 
            [service], (err, res) => {
                if(err){
                    return {status : 400, success: false, err: error};
                }
            });
        })
        return {status : 200, success: true};
    } catch (error) {
        return {status : 400, success: false, error: error.message};
    }

}

const getRentalServices = async(rentalId) => {
    try {

        const services = await pool.query('SELECT s.description FROM rental_services rs ' + 
                                       'JOIN services s ON s.service_id = rs.service_id WHERE rs.rental_id = $1 ', [rentalId]);
        return {status: 200, success: true, data: services.rows}
    } catch (error) {
        return {status : 400, success: false, error: error.message};
    }
}

const getAllServices = async() => {
    
    try {
        const services = await pool.query('SELECT * FROM services'); 
        return {status: 200, success: true, data: services.rows}
    } catch (error) {
        return {status : 400, success: false, error: error.message};
    }
}

const getRentalTypes = async() => {
    
    try {
        const services = await pool.query('SELECT * FROM rental_type'); 
        return {status: 200, success: true, data: services.rows}
    } catch (error) {
        return {status : 400, success: false, error: error.message};
    }
}


module.exports = {
    createRental,
    updateRental,
    getRentalById,
    setAvailability,
    postReview,
    addService,
    calculateAverageReview,
    getAllServices,
    getRentalTypes,
    getRentalReviews,
    getAllRentals
}