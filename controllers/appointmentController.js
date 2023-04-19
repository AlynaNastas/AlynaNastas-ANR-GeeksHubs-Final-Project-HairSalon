const { Appointment, Service, User, Client } = require("../models");

const appointController = {};

appointController.getAppoint = (req, res) => {
    res.status(200).send("All running okay");
};

appointController.createAppoint = async (req, res) => {
    try {
        const { stylist_id, service_id, date, comments } = req.body;
        const userId = req.userId;

        const newAppointment = {
            stylist_id,
            client_id: userId,
            service_id,
            date,
            comments,
        };
        const appointment = await Appointment.create(newAppointment);
        return res.json(appointment);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

appointController.deleteAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const deleteAppoint = await Appointment.destroy({
            where: { id: appointmentId, client_id: req.userId },
        });

        return res.json({
            success: true,
            message: "Successfuly canceled",
            appointment: deleteAppoint,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

appointController.seeAppointment = async (req, res) => {
    try {
        const userAppointment = await Appointment.findAll({
            where: {
                client_id: req.userId,
            },
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
                            attributes: ["name", "surname"],
                        },
                    ],
                    attributes: {
                        exclude: ["user_id", "role_id", "createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["client_id", "service_id"],
            },
        });

        return res.json(userAppointment);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

module.exports = appointController;
