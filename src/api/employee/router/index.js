const { asyncHandler } = require('../../../helper/asyncHandler');
const { authorizationMiddleware } = require('../../../middleware/authorization');
const { getEmployees } = require('../controllers/getEmployees.js');
const { getEmployeeById } = require('../controllers/getEmployeeById.js');

const router = require('express').Router();

router.get('/', authorizationMiddleware, asyncHandler(getEmployees));
router.get('/:id', authorizationMiddleware, asyncHandler(getEmployeeById));

module.exports = router;