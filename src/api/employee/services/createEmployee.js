const { getSQLiteDB } = require("../../../database/SQLite");

const createEmployee = async ({ name, lastname, age }) => {
  const db = await getSQLiteDB();
  let response = await db.run(`
    INSERT INTO employee (name, lastname, age) VALUES ("${name}", "${lastname}", "${age}")
  `);
  return response?.lastID;
}

module.exports = {
  createEmployee
}