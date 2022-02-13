// Rota de recursos register
const express = require('express');
const User = require('../models/user');
const UserController = require('../controller/user');

const router = express.Router(User);

const userController = new UserController(User);

router.post('/', (req, res) => userController.create(req, res));

module.exports = router;
