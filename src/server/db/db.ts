import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as schema from './schema'

// for query purposes
const queryClient = postgres('postgres://postgres:123123@0.0.0.0:5432/image-sass')
export const db = drizzle(queryClient, { schema })
