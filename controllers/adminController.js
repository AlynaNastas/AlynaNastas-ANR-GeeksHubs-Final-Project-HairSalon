/*const { User, Role, UserRole, Client, Appointment, Service } = require('../models/');

const adminController = {}

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//See all Users//

adminController.getAllUsers = async (req, res) => {
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








module.exports = admintController;*/