const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

class SQLiteDB {
  static DB = null;
  
  async connection(){
    if(!SQLiteDB.DB)
      SQLiteDB.DB = await open({
        filename: ':memory:',
        driver: sqlite3.Database
      });
    return SQLiteDB.DB;
  }

  async close(){
    await SQLiteDB.DB.close();
  }
}

async function getSQLiteDB(){
  return await new SQLiteDB().connection();
}

module.exports = { getSQLiteDB };