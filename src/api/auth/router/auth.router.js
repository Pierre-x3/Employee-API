const { asyncHandler } = require('../../../helper/asyncHandler');
const { authenticate } = require('../controllers/authenticate');

const router = require('express').Router();

router.post('/', asyncHandler(authenticate));

module.exports = router;