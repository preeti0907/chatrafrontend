import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async()=> {
  const session = await getServerSession(authOptions);

  return (
    <>
  {session.user.name}
    </>
  )
}

export default Home