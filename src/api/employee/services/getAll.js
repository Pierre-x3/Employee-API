const { getSQLiteDB } = require("../../../database/SQLite")

const getAll = async () => {
  const db = await getSQLiteDB();
  return await db.all(`
    SELECT * FROM employee  
  `);
}

module.exports = { getAll };