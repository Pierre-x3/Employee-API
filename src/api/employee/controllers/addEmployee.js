const { Error, Success } = require("../../../common/response.common");
const { createEmployee } = require("../services/createEmployee");


const addEmployee = async (req, res) => {
  let { name, lastname, age } = req.body;

  if(!name?.trim()) new Error('The paramter "name" is required.');
  if(!lastname?.trim()) new Error('The paramter "name" is required.');
  if(!age) new Error('The paramter "name" is required.');

  let response = await createEmployee({ name, lastname, age });
  return new Success(response).send(res);
}

module.exports = { addEmployee };