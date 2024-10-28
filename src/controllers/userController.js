// src/controllers/userController.js
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

};

const login = async (req, res) => {

};

const getProfile = async (req, res) => {
    try {
        const id = req.userData.id;
        const user = await userService.getUserById(id);
        if (user) {
            res.send({
                name: user.name,
                email: user.email
            });
        }
        else {
            res.status(404).send({ error: 'Usuario não existe!' })
        }
    } catch (error) {
        res.status(500).send({
            error: "Falha na rota get Profile",
            statusError: 1
        })
    }
};

module.exports = {
    register,
    login,
    getProfile
};
