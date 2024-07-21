const { Success } = require("../../../common/response.common");
const { connectRedis } = require("../../../database/Redis/connect.redis.js");
const { employeeAdapterAll } = require("../adapters/employee.js");
const { getAll } = require("../services/getAll.js");

const getEmployees = async (req, res) => {
  let employees = await getAll();
  let clientRedis = await connectRedis();

  let redisContent = await clientRedis.get(
    `getEmployees-${req.userId}`
  );

  if(redisContent) 
    return new Success(JSON.parse(redisContent)).send(res);

  let response = employeeAdapterAll(employees);
  console.log('se obtuvo nuevos employees')
  clientRedis.set(`getEmployees-${req.userId}`, JSON.stringify(response));

  return new Success(response).send(res);
}

module.exports = { getEmployees };