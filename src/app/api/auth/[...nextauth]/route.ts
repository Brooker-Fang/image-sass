import { authOptions } from '@/server/auth'
import { db } from '@/server/db/schema'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GitLabProvider from 'next-auth/providers/gitlab'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
