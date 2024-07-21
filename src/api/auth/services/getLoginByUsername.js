const { getSQLiteDB } = require("../../../database/SQLite");

const getLoginByUsername = async (username) => {
  const db = await getSQLiteDB();

  const query = `
    SELECT password, id FROM login WHERE username="${username}"
  `;

  return await db.get(query);
}

module.exports = { getLoginByUsername };