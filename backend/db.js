// backend/db.js
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',         // tu usuario MySQL
  password: '987654321',         // tu contraseña MySQL
  database: 'velodb',   // tu base de datos
});

export default db;


