import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from '@/server/auth'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  console.info('session===', session)

  if (!session?.user) {
    redirect('/api/auth/signin')
  }
  return <>{children}</>
}
