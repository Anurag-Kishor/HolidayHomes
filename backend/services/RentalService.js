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

const doesLocationIdExist = async(location_id) => {
    const result = await pool.query('SELECT * FROM location WHERE location_id=$1', [location_id]);
    if(result.rows.length === 0 ) return false;
    return true;
}

const createRental = async(rental) => {

  //  const client = await pool.connect();
    try {
       // await client.query('BEGIN')
        const check = await doesLocationIdExist(rental.locationId);
        
        if(!check) return {status : 400, success: false, error: "The location is not available!"};

        //Adding to RENTAL Table
        const rentalData = 'INSERT INTO RENTAL(name, description, addressline1, addressline2, location_id, available, datefrom, dateto, verified, priceperday,rentaltype, numberofrooms, numberofguests, host_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING rental_id'
        const rentalDataValues = [rental.name, rental.description, rental.addressLine1, rental.addressLine2, rental.locationId, rental.available, rental.dateFrom, rental.dateTo, false, rental.pricePerDay, rental.rentalTypeId, rental.numberOfRooms, rental.numberOfGuests, rental.host_id]
        const res = await pool.query(rentalData, rentalDataValues)

        //Adding to RENTAL_SERVICES Table
        rental.services.forEach(async(service) => {

            try{
            const rental_serviceRes = await pool.query('INSERT INTO rental_services(service_id, rental_id) VALUES ($1, $2)', [service, res.rows[0].rental_id])
            }
            catch(e) {
           //    await client.query('ROLLBACK')
                return {status : 400, success: false, error: e.message};
            }
        })

       // await client.query('COMMIT')
        console.log(rental)

        return {status : 200, success: true};
    } catch (error) {
     //   await client.query('ROLLBACK')
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
        console.log(id)

        const rental = await pool.query('SELECT r.name, r.description, r.addressLine1, r.addressLine2, l.city, l.state, l.country, r.dateFrom, r.dateTo, r.pricePerDay, ' + 
                                        't.name as rentalType, r.numberOfRooms, r.numberOfGuests, ' + 
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
        console.log('here1')

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
        console.log(rental_id, data);
        const res = await pool.query('INSERT INTO rental_reviews(user_id, rental_id, description, stars) VALUES($1, $2, $3, $4)', [data.traveler_id, rental_id, data.description, data.stars]);
        return {status : 200, success: true};

    } catch (error) {
        return {status : 400, success: false, error: error.message};
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
    getRentalTypes
    
}