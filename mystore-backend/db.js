const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    throw err;
  }
  console.log("✅ PostgreSQL Connected...");
});

module.exports = db;
