import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Create a single database connection for the server
const client = postgres(process.env.DATABASE_URL!);

// Create a db instance with the schema
export const db = drizzle(client, { schema });

// For one-off queries in scripts
export async function connectToDatabase() {
  const client = postgres(process.env.DATABASE_URL!);
  const db = drizzle(client, { schema });
  return { db, client };
}
