const pool = require('../db');

const travelerExists = async(traveler) => {

    const value = await pool.query(
        "SELECT * FROM users WHERE email= $1",
        [traveler.email]
    )

    if(value.rowCount > 0){
        return 1;
    }
    return 0;
}

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

const findUser = async(email) => {
    const value = await pool.query(
        "SELECT * FROM users WHERE email= $1",
        [email]
    )
    if(value.rowCount == 0){
        return null;
    }
    return value;
}

const createTraveler = async(traveler) => {

    if((await travelerExists(traveler))){
        return {status: 401, success: false, error: "User already exists"};
    }
   
    const locationId = await findLocationId(traveler.city, traveler.state, traveler.country);


    // Add to Users table
    let newUser=null;
    try{
        newUser = await pool.query(
            "INSERT INTO users (role_id, email, password) VALUES ($1, $2, $3) RETURNING *",
            [2, traveler.email, traveler.password]
        )
    } catch(error){
        return {status: 401, success: false, error: error.message};
    }    
   
        
    //Adding to Traveler Table
    try{
        const newTraveler = await pool.query(
            "INSERT INTO traveler (traveler_id, firstname, lastname, phonenumber, addressline1, addressline2, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [newUser.rows[0].user_id, traveler.firstName, traveler.lastName, traveler.phoneNumber, traveler.addressLine1, traveler.addressLine2, locationId ]
        )

       /* if(newTraveler.rowCount < 1){
            await pool.query(
                "DELETE FROM users WHERE email=$1",
                [traveler.email]
            )

            await pool.query(
                "DELETE FROM location where location_id=$1",
                [locationId]
            )  
        }*/
    }catch(error){
        await pool.query(
            "DELETE FROM users WHERE email=$1",
            [traveler.email]
        )
        return {status: 401, success: false, error: error.message};
    }

    return {status : 200, success: true};
}

const updateTraveler = async(id, traveler) => {

    try {
       // console.log(id);
       // console.log(traveler);
        const locationId = await findLocationId(traveler.city, traveler.state, traveler.country);
      //  console.log(locationId);
        const updatedTraveler = await pool.query(
            "UPDATE traveler SET firstname=$1, lastname=$2, phonenumber= $3, addressline1= $4, addressline2 =$5, location_id=$6 WHERE traveler_id=$7 RETURNING *",
            [traveler.firstName, traveler.lastName, traveler.phoneNumber, traveler.addressLine1, traveler.addressLine2, locationId.toString(), id]
        )

        return {status : 200, success: true};

    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }

}

const getTravelerById = async(id) => {
    try {
        const data = await pool.query (
            "SELECT  u.email, t.firstname, t.lastname, t.phonenumber, t.addressline1, t.addressline2, l.city, l.state, l.country from users u JOIN traveler t ON u.user_id = t.traveler_id JOIN location l ON t.location_id = l.location_id"
        )

    } catch (error) {
        
    }
}

const getAllTravelers = async() => {

    try {
        const data = await pool.query(
            "SELECT  u.email, t.firstname, t.lastname, t.phonenumber, t.addressline1, t.addressline2, l.city, l.state, l.country from users u JOIN traveler t ON u.user_id = t.traveler_id JOIN location l ON t.location_id = l.location_id"
        )
        return {status: 200, success: true, data: data.rows};
    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }
}

module.exports = {
    createTraveler,
    updateTraveler,
    getTravelerById,
    getAllTravelers
}