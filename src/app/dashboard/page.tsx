import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { db } from '@/server/db/db'
import { getServerSession } from '@/server/auth'
import { redirect } from 'next/navigation'

export default async function DashBoard() {
  return <div className="h-screen flex justify-center items-center">DashBoard</div>
}
