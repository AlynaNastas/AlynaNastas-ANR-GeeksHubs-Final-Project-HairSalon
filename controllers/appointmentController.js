const {Appointment } = require('../models');

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



/*appointController.deleteAppointment = async (req, res) => {
    try {
        const appointId = req.params.id;
        const userId = req.userId;
        const userRoles = req.roles;
        

        let appointment;

        if (userRoles.includes("Stylist")) {
            appointment = await Appointment.findOne({
                where: {
                    id: appointId,
                    stylist_id: userId
                }
            });
        } else {
            appointment = await Appointment.findOne({
                where: {
                    id: appointId,
                    client_id: clientId
                }
            });
        }

        if (!appointment) {
            return res.status(501).send('Appointment not found');
        }

        await appointment.destroy();

        return res.send('Appointment deleted');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};*/


appointController.deleteAppointment = async(req, res) =>{
    try {
        const appointmentId = req.params.id;
        const deleteAppoint = await Appointment.destroy({where: {id: appointmentId, client_id: req.userId}})
        
        return res.json({success:true, message: 'Successfuly canceled', appointment: deleteAppoint});
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







module.exports = appointController;