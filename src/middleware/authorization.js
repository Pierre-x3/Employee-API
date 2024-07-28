const { validateToken } = require("../api/auth/utilities/jsonwebtoken.util");
const { Unauthorized } = require("../common/response.common");

const authorizationMiddleware = async (req, res, next) => {
  try {
    let { authorization } = req.headers;

    if(!authorization?.trim()) {
      throw new Unauthorized(`Header authorization is required.`);
    }

    let token = authorization.replace('Bearer ', '');

    let tokenContent = validateToken(token);

    req.userId = tokenContent.id;

    if(tokenContent) return next();
    else {
      throw new Unauthorized();
    }
    
  } catch (e) {
    next(e);
  }
} 

module.exports = { authorizationMiddleware };
