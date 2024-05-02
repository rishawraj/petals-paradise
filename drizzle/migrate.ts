import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
const migrationClient = postgres(process.env.DATABASE_URL as string);
console.log(process.env.DATABASE_URL);

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: './drizzle/migrations',
  });

  await migrationClient.end();
}

main();
