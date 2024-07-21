const { Error, Success } = require("../../../common/response.common");
const { createEmployees } = require("../services/createEmployees");


const addEmployees = async (req, res) => {
  let employees = req.body;

  if(!employees instanceof Array){
    throw new Error('the body must be a list.');
  }

  if(employees.length == 0) {
    throw new Error('Has not elements.');
  }

  let response = await createEmployees(employees);

  return new Success(response).send(res);
}

module.exports = { addEmployees };