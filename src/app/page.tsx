import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { db } from '@/server/db/db'
import UserInfo, { UserInfoSessionProvider } from './UserInfo'
import { getServerSession } from '@/server/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  console.info('session===', session)

  if (!session?.user) {
    redirect('/api/auth/signin')
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App name" />
        <Button type="submit" className="wd-200">
          Submit
        </Button>
      </form>
      <UserInfoSessionProvider>
        <UserInfo />
      </UserInfoSessionProvider>
    </div>
  )
}
