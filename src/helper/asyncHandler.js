
const asyncHandler = (asyncFunc) => {
  return (req, res, next) => {
    asyncFunc(req, res).catch(next);
  }
};

module.exports = { asyncHandler };