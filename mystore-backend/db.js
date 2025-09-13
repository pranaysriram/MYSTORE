const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mystore-db.render.com',
  user: 'mystoreuser',    // 👈 Replace with your actual username
  password: 'gbhN9B5JyJVe12WLyDvjXy0ETg5jG9Ao', // 👈 Replace with your actual password
  database: 'mystore'
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

module.exports = db;
