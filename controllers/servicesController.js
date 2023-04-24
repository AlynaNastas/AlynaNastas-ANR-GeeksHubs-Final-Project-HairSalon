const { Service } = require("../models");

const servicesController = {};

servicesController.getServices = async (req, res) => {
    try {
        const stylists = await Service.findAll({
    
        });
        return res.json(stylists);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

module.exports = servicesController;