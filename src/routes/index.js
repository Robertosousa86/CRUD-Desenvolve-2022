// Index é responsável por carregar todas rotas da aplicação.
const express = require('express');
const userRoute = require('./user');

const router = express.Router();

router.use('/user', userRoute);

router.get('/', (req, res) => {
  res.send({
    firstServer: 'Only for test',
    Status: 'OK!',
  });
});

module.exports = router;
