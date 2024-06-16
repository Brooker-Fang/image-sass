import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as schema from './schema'

export const connectionString = 'postgres://postgres:123123@0.0.0.0:5432/image-sass'
// for query purposes
export const queryClient = postgres(connectionString)
export const db = drizzle(queryClient, { schema })
