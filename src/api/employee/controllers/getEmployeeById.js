const { Success } = require("../../../common/response.common.js");
const { employeeAdapter } = require("../adapters/employee.js");
const { getById } = require("../services/getById.js");

const getEmployeeById = async (req, res) => {
  let { id } = req.params;

  if(!id?.trim())
    throw new Error('The parameter "id" is required.');

  let employee = await getById(id);
  let response = employeeAdapter(employee);
  return new Success(response).send(res);
}

module.exports = { getEmployeeById };