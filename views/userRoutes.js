const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStylist = require('../middlewares/isStylist');

const router = require ('express').Router();


router.post('/users',userController.createUser)
router.post('/users/login',userController.login)

router.get('/users/appointments', verifyToken, userController.getAppointment)
router.get('/profile',verifyToken,userController.profile)
router.put('/updateprofile',verifyToken,userController.updateUser)

//router.get('/admin/users', verifyToken, isAdmin, userController.getAllUsers)
//router.delete('/users/:id', verifyToken, isAdmin, userController.deleteUser)
router.get('/users/role/:id', verifyToken, isAdmin, userController.getUserRole)

//router.get('/admin/stylist', verifyToken, isStylist, userController.getUser)











module.exports = router; 