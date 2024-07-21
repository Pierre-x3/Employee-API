

const { getSQLiteDB } = require("../../../database/SQLite");

const createEmployees = async (employees) => {
  const db = await getSQLiteDB();

  let employeeString = 'INSERT INTO employee (name, lastname, age) VALUES ';

  employees.forEach( emp => {
    employeeString += `("${emp.name}","${emp.lastname}", "${emp.age}"),`
  });

  return await db.get(`
    ${employeeString.slice(0, employeeString.length-1)};
  `);
}

module.exports = {
  createEmployees
}