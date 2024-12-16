import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local', override: true });

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
const migrationClient = postgres(process.env.DATABASE_URL as string);

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: './drizzle/migrations',
  });

  await migrationClient.end();
}

main();
