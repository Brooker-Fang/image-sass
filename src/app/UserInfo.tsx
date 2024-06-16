'use client'
import { SessionProvider, useSession } from 'next-auth/react'

export default function UserInfo(props: any) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  })
  const { status, data } = session
  if (status === 'loading') {
    return <div>Loading or not authenticated...</div>
  }

  return (
    <SessionProvider {...props}>
      <div>{data?.user?.name}</div>
    </SessionProvider>
  )
}

export const UserInfoSessionProvider = (props: any) => <SessionProvider {...props}></SessionProvider>
