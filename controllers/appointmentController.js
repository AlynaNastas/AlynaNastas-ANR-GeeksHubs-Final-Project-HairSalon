const {Appointment} = require('../models');

const appointController = {}


appointController.getAppoint = (req, res) => {
    res.status(200).send('All running okay');
}

//Just Users//

appointController.createAppoint = async(req, res) => {
    try {
        const { stylist_id, service_id, date, comments } = req.body;
        const userId = req.userId;
        const newAppointment = {
            stylist_id,
            client_id : userId,
            service_id,
            date,
            comments
        }
        const appointment = await Appointment.create(newAppointment)
        return res.json(appointment);
    } catch (erro) {
        return res.status(500).json(    
                {
                success: false,
                message:"Something went wrong",
                error_message: error.message
                }
            )
        }
    }


//Delete appointments Uers and Stylists//



appointController.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const userRoles = req.roles;

        let appointment;

        if (userRoles.includes("Stylist")) {
            appointment = await Appointment.findOne({
                where: {
                    id: id,
                    stylist_id: userId
                }
            });
        } else {
            appointment = await Appointment.findOne({
                where: {
                    id: id,
                    client_id: userId
                }
            });
        }

        if (!appointment) {
            return res.status(500).send('Appointment not found');
        }

        await appointment.destroy();

        return res.send('Appointment deleted');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};







module.exports = appointController;