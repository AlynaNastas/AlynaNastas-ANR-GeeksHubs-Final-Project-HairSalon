const isStylist = (req, res, next) => {
    try {
        const isStylist = req.roles.map((role) => role === 'Styilist').includes(true);
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