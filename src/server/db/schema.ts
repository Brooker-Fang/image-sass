import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

export const User = pgTable('User', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).notNull(),
})
