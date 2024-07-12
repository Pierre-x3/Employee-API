const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path')

const generateToken = (data) => {
  data = {
    ...data,
    iat: new Date(Date.now() + (1000*60*60)).getTime()
  };

  let privateKey = fs.readFileSync(
    path.join(path.resolve(__dirname), '../../../../keys/private_key.key')
    , 'utf8'
  );

  return jwt.sign(
    data, privateKey, { algorithm: 'RS256' }
  );
}

const validateToken = (token) => {
  let publicKey = fs.readFileSync(
    path.join(path.resolve(__dirname), '../../../../keys/public_key.key'),
    'utf8'
  );

  return jwt.verify(token, publicKey, { algorithms: ['RS256'] });
}

module.exports = {
  generateToken,
  validateToken
}