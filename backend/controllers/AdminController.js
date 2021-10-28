const AdminService = require('../services/AdminService');

const addRole = async(req, res) => {
    try {
        const data = req.body;
        AdminService.addRole(data.role_name);
        res.status(200).send({success:true});
    } catch (error) {
        res.status(401).send({status:false});
    }
};


module.exports = {
    addRole
}