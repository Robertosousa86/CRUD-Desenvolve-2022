// Index é responsável por carregar todas rotas da aplicação.
const express = require('express');
const userRoute = require('./user');

const router = express.Router();

router.use('/users', userRoute);

module.exports = router;
