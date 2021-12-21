const jwt = require('jsonwebtoken')

const jwtTokens = ({user_id, firstname, email}) => {
    const user = {user_id, firstname, email};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'50m'});
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn:'50m'});
    return ({accessToken, refreshToken}); 
} 

module.exports = {jwtTokens};