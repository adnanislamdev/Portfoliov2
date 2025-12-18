const { Pool } = require('pg');
require('dotenv').config();

// For Vercel/serverless, use connection string if available
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
  user: process.env.DB_USER || process.env.POSTGRES_USER || 'postgres',
  host: process.env.DB_HOST || process.env.POSTGRES_HOST || 'localhost',
  database: process.env.DB_NAME || process.env.POSTGRES_DATABASE || 'personal_website',
  password: process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.DB_PORT || process.env.POSTGRES_PORT || 5432,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  // Don't exit in serverless environment
  if (process.env.VERCEL) {
    console.error('Database error in serverless environment');
  } else {
    process.exit(-1);
  }
});

module.exports = pool;

