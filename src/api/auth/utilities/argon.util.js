const argon2 = require('argon2');

const hashArgon = async (password) => {
  return await argon2.hash(password);
}

const validateArgon = async (hash, password) => {
  return await argon2.verify(hash, password);
}

module.exports = {
  hashArgon,
  validateArgon
};