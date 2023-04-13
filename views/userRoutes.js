const userController = require('../controllers/userController');
//const verifyToken = require('../middlewares/verifyToken');
//const isAdmin = require('../middlewares/isAdmin');
//const isStylist = require('../middlewares/isStylist');

const router = require ('express').Router();


router.post('/users',userController.createUser)
router.post('/users/login',userController.login)









module.exports = router; 