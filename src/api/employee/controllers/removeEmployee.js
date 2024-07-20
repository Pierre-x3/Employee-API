const { Error, Success } = require("../../../common/response.common");
const { removeById } = require("../services/removeById");


const removeEmployee = async (req, res) => { 
  let { id } = req.params

  if(!id?.trim())
    throw new Error('The parameter "id" is required.');

  let response = await removeById(id);

  return new Success(response).send(res);
}

module.exports = { removeEmployee };