const { Success } = require("../../../common/response.common");
const { employeeAdapterAll } = require("../adapters/employee.js");
const { getAll } = require("../services/getAll.js");

const getEmployees = async (req, res) => {
  let employees = await getAll();
  let response = employeeAdapterAll(employees);
  return new Success(response).send(res);
}

module.exports = { getEmployees };