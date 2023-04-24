const { Role, User, UserRole, Client, Service, Appointment } = require("../models");

const roleController = {};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

roleController.createRole = async (req, res) => {
    try {
        const { privilege } = req.body;

        const newPrivilage = {
            privilege,
        };
        const role = await Role.create(newPrivilage);
        return res.json(role);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.deleteRole = async (req, res) => {
    try {
        const roleId = req.params.id;
        const deleteRole = await Role.destroy({ where: { id: roleId } });

        return res.json(deleteRole);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.updateRoles = async (req, res) => {
    try {
        const { privilege } = req.body;
        const role = req.params.id;

        const updateRole = await Role.update(
            {
                privilege: privilege,
            },
            {
                where: {
                    id: role,
                },
            }
        );

        if (!updateRole) {
            return res.send("Role not updated");
        }
        return res.send("Role updated");
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.addRole = async (req, res) => {
    try {
        const { user_id, role_id } = req.body;

        const addRole = {
            user_id,
            role_id,
        };

        const uRoles = await UserRole.create(addRole);

        return res.json(uRoles);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["password"] },
        });

        return res.json(users);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({ where: { id: userId } });

        const existUser = await User.findOne({
            where: {
                id: userId,
            },
        });
        if (!existUser) {
            return res.status(501).json({
                success: true,
                message: "User not found",
            });
        }

        return res.json(deleteUser);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.getUserRole = async (req, res) => {
    try {
        const userId = req.params.id;

        const Userrole = await User.findByPk(userId, {
            include: { all: true },
            attributes: { exclude: ["password"] },
        });
        return res.json(Userrole);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

roleController.getStylistApp = async (req, res) => {
    try {
        const adminAppointment = await Appointment.findAll({
            include: [
                {
                    model: Service,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
                {
                    model: Client,
                    include: [
                        {
                            model: User,
                            attributes: { exclude: ["id", "password", "updatedAt"] },
                        },
                    ],
                },
            ],
            attributes: {
                exclude: ["client_id", "service_id"],
            },
        });

        return res.json(adminAppointment);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error_message: error.message,
        });
    }
};

module.exports = roleController;
