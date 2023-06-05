"use client";
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]';

function HeaderComponent() {
  const session = await getServerSession(authOptions)


  return (
    <>{json.stringify(session)}</>
  )
}

export default HeaderComponent