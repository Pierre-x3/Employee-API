
const authenticateAdapter = (data) => {
  return {
    token: data.token
  };
};

module.exports = { authenticateAdapter };