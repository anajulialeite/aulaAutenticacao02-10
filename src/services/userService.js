// src/services/userService.js
const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');

async function registerUser(email, name, password) {

}

async function authenticateUser(email, password) {

    return isMatch ? user : null;
}

async function getUserById(id) {
    return userRepository.findUserById(id)
}

module.exports = {
    registerUser,
    authenticateUser,
    getUserById
};
