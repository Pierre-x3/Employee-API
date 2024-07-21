const { Error, Success } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis");
const { createEmployee } = require("../services/createEmployee");


const addEmployee = async (req, res) => {
  let { name, lastname, age } = req.body;
  const redisClient = await connectRedis();

  if(!name?.trim()) new Error('The paramter "name" is required.');
  if(!lastname?.trim()) new Error('The paramter "name" is required.');
  if(!age) new Error('The paramter "name" is required.');

  await redisClient.del(`getEmployees-${req.userId}`);

  let response = await createEmployee({ name, lastname, age });
  return new Success(response).send(res);
}

module.exports = { addEmployee };