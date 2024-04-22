import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString:
      'postgres://rishaw:raj@2280@localhost:5432/petals_paradise_db',
  },
  verbose: true,
  strict: true,
});
