const mysql = require('mysql2/promise');
require('dotenv').config();

async function getConnection() {
  try {
    const conn = await mysql.createConnection({
      host: process.env['DB_HOST'],      // = 127.0.0.1
      port: 3306,
      user: process.env['DB_USER'],
      password: process.env['DB_PASS'],
      database: process.env['DB_SCHEMA']
    });

    await conn.connect();

    return conn;
  }
  catch (error) {
    console.log(error);

    return null;
  }
}

module.exports = getConnection;