const { asyncHandler } = require('../../../helper/asyncHandler');
const { authorizationMiddleware } = require('../../../middleware/authorization');
const { authenticate } = require('../controllers/authenticate');

const router = require('express').Router();

router.post('/', asyncHandler(authenticate));

module.exports = router;