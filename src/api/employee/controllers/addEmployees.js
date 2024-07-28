const { Success, BadRequest } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis");
const { createEmployees } = require("../services/createEmployees");


const addEmployees = async (req, res) => {
  let employees = req.body;

  if(!employees instanceof Array){
    throw new BadRequest('the body must be a list.');
  }

  if(employees.length == 0) {
    throw new BadRequest('Has not elements.');
  }

  const redisClient = await connectRedis();
  await redisClient.del(`getEmployees-${req.userId}`);

  let response = await createEmployees(employees);

  return new Success(response).send(res);
}

module.exports = { addEmployees };