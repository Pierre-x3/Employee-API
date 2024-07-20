const { getSQLiteDB } = require("../../../database/SQLite");

const removeById = async (employeeId) => {
  const db = await getSQLiteDB();
  return await db.get(`
    DELETE FROM employee WHERE id="${employeeId}"
  `);
}

module.exports = { removeById };