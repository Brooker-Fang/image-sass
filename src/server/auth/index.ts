import { db } from '@/server/db/schema'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth, { AuthOptions, getServerSession as nextGetServerSession } from 'next-auth'
import GitLabProvider from 'next-auth/providers/gitlab'

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as any,
  // Configure one or more authentication providers
  providers: [
    GitLabProvider({
      clientId: 'b37ee24065abd00c0cf763dbb0e493c5fff93e497083e6ada6fa8253f236e7d8',
      clientSecret: 'gloas-3a0a06299be0c3a9caa362b75fffd117f4f601b60d4834ffe83cad25c87bd436',
    }),
    // ...add more providers here
  ],
}

export const getServerSession = () => {
  return nextGetServerSession(authOptions)
}
