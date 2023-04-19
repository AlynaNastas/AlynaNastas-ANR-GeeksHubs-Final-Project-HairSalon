const { User, Role, UserRole, Client } = require("../models");
const userController = {};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userController.createUser = async (req, res) => {
    try {
        const { name, surname, email, password, birth_date, phone } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 12);

        const newUser = {
            name,
            surname,
            email,
            password: encryptedPassword,
            birth_date,
            phone,
        };
        const user = await User.create(newUser);

        await UserRole.create({
            user_id: user.id,
            role_id: 3,
        });

        await Client.create({
            id: user.id,
            user_id: user.id,
        });

        return res.json(user);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

userController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email,
            },
            include: [Role],
        });

        if (!user) {
            return res.send("Wrong credentials");
        }
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send("Wrong credentials");
        }

        const userRoles = user.Roles;

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roles: userRoles.map((role) => role.privilege),
            },
            "key",
            { expiresIn: "2h" }
        );

        return res.json(token);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

userController.profile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId);

        return res.json(user);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

userController.updateUser = async (req, res) => {
    try {
        const { name, surname, email, password, birth_date, phone } = req.body;
        const userId = req.userId;

        const encryptedPassword = bcrypt.hashSync(password, 12);

        const updateUSer = await User.update(
            {
                name,
                surname,
                email,
                password: encryptedPassword,
                birth_date,
                phone,
            },
            {
                where: {
                    id: userId,
                },
            }
        );

        if (!updateUSer) {
            return res.send("User not updated");
        }
        return res.send("User updated");
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

module.exports = userController;
