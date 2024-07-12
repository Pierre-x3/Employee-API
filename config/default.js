require('dotenv').config();

module.exports = {
  SERVER: {
    PORT: process.env.PORT
  },
  KEYS: {
    password: process.env.PRIVATE_PASSWORD
  }
};