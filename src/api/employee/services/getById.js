const { getEmployeeByIdRepo } = require('../repositories/getEmployeeById.js')

const getById = async (employeeId) => {
  return await getEmployeeByIdRepo(employeeId);
}

module.exports = { getById };