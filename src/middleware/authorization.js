const { validateToken } = require("../api/auth/utilities/jsonwebtoken.util");
const { Unathorized } = require("../common/response.common");

const authorizationMiddleware = async (req, res, next) => {
  try {
    let { authorization } = req.headers;

    if(!authorization?.trim()) {
      throw new Unathorized(`Header authorization is required.`);
    }

    let token = authorization.replace('Bearer ', '');

    let tokenContent = validateToken(token);

    req.userId = tokenContent.id;

    if(tokenContent) return next();
    else {
      throw new Unathorized(`Access denied.`);
    }
    
  } catch (e) {
    next(e);
  }
} 

module.exports = { authorizationMiddleware };
