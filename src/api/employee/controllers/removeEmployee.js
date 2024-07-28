const { Success, BadRequest } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis");
const { removeById } = require("../services/removeById");

const removeEmployee = async (req, res) => { 
  let { id } = req.params;
  const clientRedis = await connectRedis();

  await clientRedis.del(`getEmployees-${req.userId}`);

  if(!id?.trim())
    throw new BadRequest('The parameter "id" is required.');

  let response = await removeById(id);

  return new Success(response).send(res);
}

module.exports = { removeEmployee };