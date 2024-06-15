import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123123',
    database: 'image-sass',
  },
  verbose: true,
  strict: true,
})
