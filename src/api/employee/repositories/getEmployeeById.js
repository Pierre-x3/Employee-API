const { getSQLiteDB } = require("../../../database/SQLite");

const getEmployeeByIdRepo = async (id) => {
  const db = await getSQLiteDB();
  return await db.get(`
    SELECT * FROM employee WHERE id="${id}" 
  `);
}

module.exports = { getEmployeeByIdRepo } ;