const pool = require('../db');

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

const createRental = async(rental) => {

    const client = await pool.connect();
    try {
        await client.query('BEGIN')
        const locationId = await findLocationId(rental.city, rental.state, rental.country);
        
        //Adding to RENTAL Table
        const rentalData = 'INSERT INTO RENTAL(name, description, addressline1, addressline2, location_id, available, datefrom, dateto, verified, priceperday,rentaltype, numberofrooms, numberofguests, host_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING rental_id'
        const rentalDataValues = [rental.name, rental.description, rental.addressLine1, rental.addressLine2, locationId, rental.available, rental.dateFrom, rental.dateTo, false, rental.pricePerDay, rental.rentalTypeId, rental.numberOfRooms, rental.numberOfGuests, rental.host_id]
        const res = await client.query(rentalData, rentalDataValues)

        //Adding to RENTAL_SERVICES Table
        rental.services.forEach(async(service) => {

            try{
            const rental_serviceRes = await client.query('INSERT INTO rental_services(service_id, rental_id) VALUES ($1, $2)', [service, res.rows[0].rental_id])
            }
            catch(e) {
                await client.query('ROLLBACK')
                return {status : 400, success: e};
            }
        })

        //Adding to host_rentals;
    //    await client.query('INSERT INTO host_rentals(rental_id, host_id) VALUES ($1, $2)', [res, rental.host_id])
        await client.query('COMMIT')

        return {status : 200, success: true};
    } catch (error) {
        await client.query('ROLLBACK')
        return {status : 400, success: error};

    } finally {
        client.release()
    }
}

const updateRental = async(rental) => {
    try {
        
    } catch (error) {
        
    }
}

const getRentalById = async(id) => {
    try {
        const rental = await pool.query('SELECT * from rental WHERE rental_id = $1', [id]);
        return {status : 200, success: true, data:rental.rows};
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
        const res = await pool.query('INSERT INTO rental_reviews(user_id, rental_id, description, stars) VALUES($1, $2, $3, $4)', [data.traveler_id, rental_id, data.description, data.stars]);
        return {status : 200, success: true};

    } catch (error) {
        return {status : 400, success: false};
    }
}

const calculateAverageReview = async(rental_id) => {
    try {
        const res = await pool.query('SELECT AVG(stars) FROM rental_reviews WHERE rental_id = $1', [rental_id]);

        return {status : 200, success: true, data: Math.ceil(res.rows[0].avg)};
    } catch (error) {
        return {status : 400, success: false, error: error};
    }
}
const addService = async(renta_id) => {

}

module.exports = {
    createRental,
    updateRental,
    getRentalById,
    setAvailability,
    postReview,
    addService,
    calculateAverageReview
}