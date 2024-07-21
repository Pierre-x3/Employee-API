const { asyncHandler } = require('../../../helper/asyncHandler');
const { authorizationMiddleware } = require('../../../middleware/authorization');
const { getEmployees } = require('../controllers/getEmployees.js');
const { getEmployeeById } = require('../controllers/getEmployeeById.js');
const { removeEmployee } = require('../controllers/removeEmployee.js');
const { addEmployee } = require('../controllers/addEmployee.js');
const { addEmployees } = require('../controllers/addEmployees.js');

const router = require('express').Router();

router.get('/', authorizationMiddleware, asyncHandler(getEmployees))
  .get('/:id', authorizationMiddleware, asyncHandler(getEmployeeById))
  .delete('/:id', authorizationMiddleware, asyncHandler(removeEmployee))
  .post('/', authorizationMiddleware, asyncHandler(addEmployee))
  .post('/massive', authorizationMiddleware, asyncHandler(addEmployees))

module.exports = router;