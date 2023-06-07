"use client";

import React, { useEffect, useState } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]';




function HeaderComponent() {

  useEffect(() => {

    const getUsers = async () => {
      const session = await getServerSession(authOptions);
  console.log(session)
  
    };
   
   }, []);

  return (
    <>
    
    <header>
      <div class="container">
        <div class="row inner-header">
          <div class="col-2 header-logo">
            <img src="assets/images/header-logo.png" alt="logo-image"/>
          </div>
           <div class="col-6 search"> 
            <form class="d-flex" role="search">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                
            </form>
            </div>
            <div class="col-4 profile">
              <ul>
                <li>
                  <a href="#"><img src="assets/images/client1.png"/></a>
                  <p>John</p>
                </li>
                <li>
                  <a href="#"><img src="assets/images/header-icon.png"   /></a>
                  <p>Notification</p>
                </li>

                <li>
                  <a href="#">
                  <img src="assets/images/header-icon2.png"   /></a>
                     <p>Notification</p>
                 
                </li>
              </ul>
            </div>
        </div>
      </div>
  </header>
    </>
  )
}

export default HeaderComponent