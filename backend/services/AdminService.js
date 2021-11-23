const pool = require("../db");

const addRole = async(role_name) => {
   try {
        const newRole = await pool.query(
            "INSERT INTO Role (Role_name) VALUES ($1)",
            [role_name]
        );
   } catch (error) {
       console.log(error);
   } 
    
}


module.exports = {
    addRole
};