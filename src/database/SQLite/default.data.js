const { getSQLiteDB } = require(".");

const stamentCreateTable = `
  CREATE TABLE login (
    id INTEGER PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO login (username, password) VALUES ('pepito', '$argon2id$v=19$m=65536,t=3,p=4$I8ql/5nZEySCXZawuUxbkg$+FUW2Ao0ZK9yAmKdmfQ84a+WdyZWs+GHtsaVk0i9oEE');

  CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50),
    age NUMBER
  );

  INSERT INTO employee (name, lastname, age) VALUES('Pierre', 'Bernaola', 29);
  INSERT INTO employee (name, lastname, age) VALUES('Angie', 'Bernaola', 31);
  INSERT INTO employee (name, lastname, age) VALUES('Rosa', 'Moreno', 61);
  INSERT INTO employee (name, lastname, age) VALUES('Oscar', 'Bernaola', 62);
`;

(
  async () => {
    const sqliteDB = await getSQLiteDB();
    await sqliteDB.exec(stamentCreateTable);
  }
)();