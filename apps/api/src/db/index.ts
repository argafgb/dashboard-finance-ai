import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test the connection on startup
pool.on('error', (err) => {
  console.error('[DB] Unexpected pool error:', err);
  process.exit(1);
});

export const db = drizzle(pool, { schema });

export { pool };

export type Database = typeof db;
