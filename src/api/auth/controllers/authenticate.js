const { Error, Unathorized, Success } = require("../../../common/response.common");
const { authenticateAdapter } = require("../adapters/authenticate.adapter");
const { getLoginByUsername } = require("../services/getLoginByUsername");
const { validateArgon } = require("../utilities/argon.util");
const { generateToken } = require("../utilities/jsonwebtoken.util");

const authenticate = async (req, res) => {
  let { username, password } = req.body;

  if(!username.trim() || !password.trim()) {
    throw Error(`The username and password are required.`);
  }

  let user = await getLoginByUsername(username);

  if(!user){
    throw new Unathorized('The username or password are incorrect.');
  }

  if(!await validateArgon(user.password, password)){
    throw new Unathorized('The username or password are incorrect.');
  }

  let token = generateToken({ id: user.id });

  let response = authenticateAdapter({ token });

  return new Success(response, 'Connection Successfully').send(res);
}

module.exports = { authenticate };