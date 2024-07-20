const { getSQLiteDB } = require("../../../database/SQLite");

const createEmployee = async ({ name, lastname, age }) => {
  const db = await getSQLiteDB();
  return await db.get(`
    INSERT INTO employee (name, lastname, age) VALUES ("${name}", "${lastname}", "${age}")
  `);
}

module.exports = {
  createEmployee
}