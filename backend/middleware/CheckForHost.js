const pool = require('../db');

const checkForHost = async (req, res, next) => {
    try {
        const host_id = req.body.user_id;

        const result = await pool.query('SELECT isHost FROM users WHERE user_id=$1', [host_id]);

        if(result.rowCount === 0) {
            return {status: 404, success: false, error: 'User not found'};
        }
        
        if(result.rows[0].isHost){
            next();
        }else{
            return {status: 404, success: false, error: 'User is not a host!'};
        }
    } catch (error) {
        return {status: 404, success: false, error: error.message};
    }

}

module.exports = {checkForHost};