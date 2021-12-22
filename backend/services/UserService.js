const pool = require("../db");

const userExists = async (user) => {
  const value = await pool.query("SELECT * FROM users WHERE email= $1", [
    user.email,
  ]);

  if (value.rowCount > 0) {
    return 1;
  }
  return 0;
};

const findLocationId = async (city, state, country) => {
  // fetch the location
  const data = await pool.query(
    "SELECT * FROM location WHERE city=$1 AND state=$2 AND country=$3",
    [city, state, country]
  );

  let locationId = null;
  // if location exists then use that location_id
  if (data.rowCount > 0) {
    locationId = data.rows[0].location_id;
  } else {
    //else add the location to table and use that location_id
    const newLocation = await pool.query(
      "INSERT INTO location (city, state, country) VALUES ($1, $2, $3) RETURNING *",
      [city, state, country]
    );
    locationId = newLocation.rows[0].location_id;
  }
  return locationId;
};

const doesLocationIdExist = async (location_id) => {
  const result = await pool.query(
    "SELECT * FROM location WHERE location_id=$1",
    [location_id]
  );
  if (result.rows.length === 0) return false;
  return true;
};

const checkIfUserIsHost = async (user_id) => {
  const value = await pool.query("SELECT isHost FROM users WHERE user_id= $1", [
    user_id,
  ]);
  if (value.rowCount == 0) {
    return { status: 401, success: false, error: "Cant find user!" };
  }
  return { status: 200, success: true, data: value };
};

const createUser = async (user) => {
  if (await userExists(user)) {
    return { status: 401, success: false, error: "User already exists" };
  }
  const check = await doesLocationIdExist(user.location_id);
  if (!check)
    return {
      status: 400,
      success: false,
      error: "The location is not available!",
    };

  //Adding to Users Table
  try {
    const newUser = await pool.query(
      "INSERT INTO users (email, password, firstname, lastname, phonenumber, addressline1, addressline2, ishost, Location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [
        user.email,
        user.password,
        user.firstName,
        user.lastName,
        user.phoneNumber,
        user.addressLine1,
        user.addressLine2,
        false,
        user.location_id,
      ]
    );
    return { status: 200, success: true };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

//Make this update User///
const updateUser = async (id, user) => {
  try {
    const updatedUser = await pool.query(
      "UPDATE host SET firstname=$1, lastname=$2, phonenumber= $3, addressline1= $4, addressline2 =$5 WHERE host_id=$6 RETURNING *",
      [
        user.firstName,
        user.lastName,
        user.phoneNumber,
        user.addressLine1,
        user.addressLine2,
        id,
      ]
    );

    return { status: 200, success: true };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

// Make this user
const getUserById = async (id) => {
  try {
    const data = await pool.query(
      "SELECT u.user_id, u.email, u.firstname, u.lastname, u.phonenumber, u.ishost, u.addressline1, u.addressline2, l.city, l.state, l.country from Users u " +
        "JOIN Location l ON l.location_id = u.location_id " +
        "WHERE user_id=$1",
      [id]
    );

    return { status: 200, success: true, data: data.rows[0] };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

// Make this user
const getAllUsers = async () => {
  try {
    const data = await pool.query("SELECT * FROM users");
    /*const data = await pool.query(
            "SELECT u.user_id, u.email, u.firstname, u.lastname, u.phonenumber, u.addressline1, u.addressline2, l.city, l.state, l.country from users u " + 
            "JOIN Location l ON u.location_id = l.location_id "        
        );*/
    return { status: 200, success: true, data: data.rows };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

//Make this user
const deleteUser = async (id) => {
  try {
    const deleteHost = await pool.query(
      "DELETE FROM Users WHERE user_id = $1",
      [id]
    );
    return { status: 200, success: true };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

const makeHost = async (userId) => {
  try {
    console.log(userId);
    const result = await pool.query(
      "UPDATE Users SET isHost=true WHERE user_id = $1",
      [userId]
    );
    return { status: 200, success: true };
  } catch (error) {
    return { status: 401, success: false, error: error.message };
  }
};

module.exports = {
  createUser,
  updateUser,
  getUserById,
  getAllUsers,
  deleteUser,
  checkIfUserIsHost,
  makeHost,
};
