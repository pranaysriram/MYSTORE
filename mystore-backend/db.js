const { Pool } = require('pg');

const db = new Pool({
  connectionString: 'postgres://mystoreuser:gbhN985JyJVe12WLvdyJxy8ETG5Jg9Ao@dpg-d32ppk0d3ps738b0820-a/mystore_oyzk'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    throw err;
  }
  console.log("✅ PostgreSQL Connected...");
});

module.exports = db;
