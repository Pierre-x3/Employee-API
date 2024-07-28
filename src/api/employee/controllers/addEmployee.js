const { Success, BadRequest } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis");
const { createEmployee } = require("../services/createEmployee");


const addEmployee = async (req, res) => {
  let { name, lastname, age } = req.body;

  if(!name?.trim()) new BadRequest('The paramter "name" is required.');
  if(!lastname?.trim()) new BadRequest('The paramter "name" is required.');
  if(!age) new BadRequest('The paramter "name" is required.');

  const redisClient = await connectRedis();
  await redisClient.del(`getEmployees-${req.userId}`);

  let employeeId = await createEmployee({ name, lastname, age });
  return new Success({ id: employeeId }).send(res);
}

module.exports = { addEmployee };