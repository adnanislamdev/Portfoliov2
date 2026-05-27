const { Pool } = require('pg');
const { parse: parseConnectionString } = require('pg-connection-string');

let pool = null;

try {
  let poolConfig = {};
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (connectionString) {
    // Parse the URL ourselves and build an explicit config so the `ssl` option
    // we set below cannot be overridden by a `sslmode=require` (or similar) flag
    // in the connection string, which is what causes SELF_SIGNED_CERT_IN_CHAIN
    // errors on Vercel against managed Postgres (Supabase/Neon/etc.).
    const parsed = parseConnectionString(connectionString);
    poolConfig = {
      host: parsed.host,
      port: parsed.port ? Number(parsed.port) : 5432,
      database: parsed.database,
      user: parsed.user,
      password: parsed.password,
      ssl: { rejectUnauthorized: false },
    };
  } else {
    poolConfig = {
      user: process.env.DB_USER || process.env.POSTGRES_USER || 'postgres',
      host: process.env.DB_HOST || process.env.POSTGRES_HOST || 'localhost',
      database: process.env.DB_NAME || process.env.POSTGRES_DATABASE || 'personal_website',
      password: process.env.DB_PASSWORD || process.env.POSTGRES_PASSWORD || 'postgres',
      port: process.env.DB_PORT || process.env.POSTGRES_PORT || 5432,
      ssl: false,
    };
  }

  pool = new Pool(poolConfig);

  if (pool) {
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
  }
} catch (error) {
  console.error('Failed to initialize database pool:', error);
  pool = null;
}

module.exports = pool;

