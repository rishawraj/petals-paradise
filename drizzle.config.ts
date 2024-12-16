import { defineConfig } from 'drizzle-kit';

import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local', override: true });

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
