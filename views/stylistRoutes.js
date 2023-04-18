const stylistController = require('../controllers/stylistController');
const verifyToken = require('../middlewares/verifyToken');
const isStylist = require('../middlewares/isStylist');



const router = require ('express').Router();

router.get('/stylist/app', verifyToken, isStylist, stylistController.getStylistApp)





module.exports = router; 