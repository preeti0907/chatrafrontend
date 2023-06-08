import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react';
import Link from 'next/link'


  const HeaderComponent = async()=> {
  const session = await getServerSession(authOptions)

  return (
    <>
    
    <header>
      <div className="container">
        <div className="row inner-header">
          <div className="col-2 header-logo">
            <img src="assets/images/header-logo.png" alt="logo-image"/>
          </div>
           <div className="col-6 search"> 
            <form className="d-flex" role="search">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                
            </form>
            </div>
            <div className="col-4 profile">
              <ul>
                <li>

                  {session ?<><Link href="/"><img src="assets/images/client1.png"/></Link>
                  <p>{session.user.name}</p></>:<><Link href="/login"><img src="assets/images/client1.png"/></Link>
                  <p>Login</p></>}
                  
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