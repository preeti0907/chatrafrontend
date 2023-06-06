"use client";

import React, { useEffect, useState } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]';

import React from 'react'


function HeaderComponent() {

  useEffect(() => {

    const getUsers = async () => {
      const session = await getServerSession(authOptions);
  console.log(session)
  
    };
   
   }, []);

  return (
    <></>
  )
}

export default HeaderComponent