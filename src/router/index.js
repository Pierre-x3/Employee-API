const router = require('express').Router();

const login = require('../api/auth/router/auth.router.js');
const employee = require('../api/employee/router');

module.exports = (app) => {
  app.use('/v1/', router);

  //V1
  router.use('/login', login);
  router.use('/employee', employee);
}