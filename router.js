const router = require('express').Router();

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const stylistRoutes = require('./views/stylistRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');





router.use('/', stylistRoutes);
router.use('/', roleRoutes);
router.use('/', userRoutes);
router.use('/', appointmentRoutes);

module.exports = router;