const {Role} = require('../models');

const roleController = {}

roleController.createRole = async(req,res)=>{
    try{
        const {privilege} = req.body;

        const newPrivilage = {
            privilege
        }
        const role = await Role.create(newPrivilage)
        return res.json(role)
    }catch (error) {
        return res.status(500).json(    
            {
            success: false,
            message:"Something went wrong",
            error_message: error.message
            }
        )
    }
}

module.exports = roleController;