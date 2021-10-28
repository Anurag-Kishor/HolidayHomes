const pool = require('../db');

const hostExists = async(host) => {

    const value = await pool.query(
        "SELECT * FROM users WHERE email= $1",
        [host.email]
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

const createHost = async(host) => {

    if((await hostExists(host))){
        return {status: 401, success: false, error: "User already exists"};
    }
   
    const locationId = await findLocationId(host.city, host.state, host.country);


    // Add to Users table
    let newUser=null;
    try{
        newUser = await pool.query(
            "INSERT INTO users (role_id, email, password) VALUES ($1, $2, $3) RETURNING *",
            [1, host.email, host.password]
        )
    } catch(error){
        return {status: 401, success: false, error: error.message};
    }    
   
        
    //Adding to Host Table
    try{
        const newHost = await pool.query(
            "INSERT INTO host (host_id, firstname, lastname, phonenumber, addressline1, addressline2, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [newUser.rows[0].user_id, host.firstName, host.lastName, host.phoneNumber, host.addressLine1, host.addressLine2, locationId ]
        )

     
    }catch(error){
        await pool.query(
            "DELETE FROM users WHERE email=$1",
            [host.email]
        )
        return {status: 401, success: false, error: error.message};
    }

    return {status : 200, success: true};
}

const updateHost = async(id, host) => {

    try {
       // console.log(id);
       // console.log(host);
        const locationId = await findLocationId(host.city, host.state, host.country);
      //  console.log(locationId);
        const updatedHost = await pool.query(
            "UPDATE host SET firstname=$1, lastname=$2, phonenumber= $3, addressline1= $4, addressline2 =$5, location_id=$6 WHERE host_id=$7 RETURNING *",
            [host.firstName, host.lastName, host.phoneNumber, host.addressLine1, host.addressLine2, locationId.toString(), id]
        )

        return {status : 200, success: true};

    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }

}

const getHostById = async(id) => {
    try {
        const data = await pool.query (
            "SELECT u.user_id, u.email, t.firstname, t.lastname, t.phonenumber, t.addressline1, t.addressline2, l.city, l.state, l.country from host t " + 
            "JOIN Users u ON t.host_id = u.user_id " + 
            "JOIN Location l ON l.location_id = t.location_id " + 
            "WHERE host_id=$1",
            [id]
        );

        return {status: 200, success: true, data: data.rows};
    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }
}

const getAllHosts = async() => {

    try {

        const data = await pool.query(
            "SELECT u.user_id, u.email, t.firstname, t.lastname, t.phonenumber, t.addressline1, t.addressline2, l.city, l.state, l.country from host t " + 
            "JOIN Users u ON t.host_id = u.user_id " + 
            "JOIN Location l ON l.location_id = t.location_id "        
        );
        return {status: 200, success: true, data: data.rows};
    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }
}

const deleteHost = async(id) => {
    try {
        const deleteHost = await pool.query(
            "DELETE FROM host WHERE host_id = $1",
            [id]
        );
        return {status: 200, success: true};
    } catch (error) {
        return {status: 401, success: false, error: error.message};
    }
}

module.exports = {
    createHost,
    updateHost,
    getHostById,
    getAllHosts,
    deleteHost
}