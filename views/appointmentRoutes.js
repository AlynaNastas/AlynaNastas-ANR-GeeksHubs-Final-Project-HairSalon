const appointController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStylist = require('../middlewares/isStylist');

const router = require ('express').Router();


router.get('/appoint',appointController.getAppoint)
router.post('/appoint', verifyToken, appointController.createAppoint)
router.delete('/appoint/:id', verifyToken, isStylist, appointController.deleteAppointment)






module.exports = router;