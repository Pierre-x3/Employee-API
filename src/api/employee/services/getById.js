const { getSQLiteDB } = require("../../../database/SQLite")

const getById = async (employeeId) => {
  const db = await getSQLiteDB();
  return await db.get(`
    SELECT * FROM employee WHERE id="${employeeId}" 
  `);
}

module.exports = { getById };