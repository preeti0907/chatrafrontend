"use client";

import React from 'react';

function HeaderComponent() {


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