const { User, Role, Client, Appointment, Service } = require("../models");

const stylistController = {};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

stylistController.getStylistApp = async (req, res) => {
  try {
    const stylistAppointment = await Appointment.findAll({
      include: [
        {
          model: Service,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: Client,
          include: [
            {
              model: User,
              attributes: { exclude: ["id", "password", "updatedAt"] },
            },
          ],
        },
      ],
      attributes: {
        exclude: ["client_id", "service_id"],
      },
    });

    return res.json(stylistAppointment);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error_message: error.message,
    });
  }
};

stylistController.getUser = async (req, res) => {
  try {
    const stylists = await User.findAll({
      include: [
        {
          model: Role,
          where: {
            privilege: "User",
          },
        },
      ],
      attributes: { exclude: ["password"] },
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

module.exports = stylistController;
