const { Error, Success } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis");
const { createEmployees } = require("../services/createEmployees");


const addEmployees = async (req, res) => {
  let employees = req.body;
  const redisClient = await connectRedis();

  if(!employees instanceof Array){
    throw new Error('the body must be a list.');
  }

  if(employees.length == 0) {
    throw new Error('Has not elements.');
  }

  await redisClient.del(`getEmployees-${req.userId}`);

  let response = await createEmployees(employees);

  return new Success(response).send(res);
}

module.exports = { addEmployees };