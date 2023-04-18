const {Role , User, Client, Appointment, Service } = require('../models');

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

roleController.addRole = async(req,res)=>{
    try{
        const {user_id, role_id} = req.body;

        const addRole = {
            user_id,
            role_id
        }
        
        const uRoles = await UserRole.create(addRole)

        return res.json(uRoles);
    } catch (error) {
        return res.status(500).json(    
                {
                success: false,
                message:"Something went wrong",
                error_message: error.message
                }
            )
        }
    }


    roleController.getAllUsers = async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }
            });
    
            return res.json(users);
        } catch (error) {
            return res.status(500).json(    
                    {
                    success: false,
                    message:"Something went wrong",
                    error_message: error.message
                    }
                )
            }
        }
    
        roleController.deleteUser = async(req, res) =>{
            try {
                const userId = req.params.id;
                const deleteUser = await User.destroy({where: {id: userId}})
                
                return res.json(deleteUser);
            } catch (error) {
                return res.status(500).json(    
                    {
                        success: false,
                        message:"Something went wrong",
                        error_message: error.message
                    }
                )
            }
        }


    //Check Roles by id//

    roleController.getUserRole = async(req, res) =>{
        try {
            const userId = req.params.id;
    
            const Userrole= await User.findByPk(userId,{
                include:{all: true},
                attributes: {exclude: ['password']}
            })
            return res.json(Userrole);
        } catch (error) {
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