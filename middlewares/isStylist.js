const isStylist = (req, res, next) => {
    try {
        const isStylist = req.roles.map((role) => role === 'Stylist').includes(true);
    if (isStylist) {
        next();
        } else {
            return res.send('Permission denied');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = isStylist;