"use client";
import { React, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"

import { toast } from "react-toastify"

const Apiurl = "https://chatraschool.vistamatrix.com";

const page = async()=> {
  const router = useRouter();
  const { data: session } = useSession()
  if(session){
      router.push("/");
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    var email = event.target.email.value.toLowerCase();
    var password = event.target.password.value;
    var first_name = event.target.first_name.value;
    var last_name = event.target.last_name.value;
    var user_name = event.target.user_name.value;

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);
    formdata.append('first_name', first_name);
    formdata.append('last_name', last_name);
    formdata.append('user_name', user_name);

    await axios({
        method: "post",
        url: Apiurl + `/api/register`,
        data: formdata
    }).then((response) => {
        if (response.data.status == true) {
            toast.success(response.data.message, {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }else{
            toast.error(response.data.message, {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }


    }).catch((errorMsg) => {

        const error = errorMsg.response.data.message;

        if (JSON.parse(error).email) {
            toast.error(JSON.parse(error).email[0], {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }
        if (JSON.parse(error).first_name) {
            toast.error(JSON.parse(error).first_name[0], {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }

        if (JSON.parse(error).last_name) {
          toast.error(JSON.parse(error).last_name[0], {
              position: "top-right",
              classNameName: "app_toast",
              autoClose: 1000,
          })
      }

        if (JSON.parse(error).user_name) {
            toast.error(JSON.parse(error).user_name[0], {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }

        if (JSON.parse(error).password) {
            toast.error(JSON.parse(error).password[0], {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        }
    })


}

  return (
    <>
      
  <div class="bg-img">
   
   <div class="container outer_body p-0 m-0">
     <div class="row justify-content-center" id="login-detail">
       <div class="col-12 col-sm-12 col-md-8 col-lg-5 border main-div" >
          <div class="logo">
             <img src="assets/images/logo.jpeg" alt="logo-image"/>
             <h3>Sign Up</h3>
           </div>
       <form onSubmit={handleSubmit}>

         <div class="row">
           <div class="row">
           <div class="col-6 first-name">

             <div class=" form-group">

              <label for="exampleInputEmail1" class="form-label">First Name</label>
           
  
   
           </div>
           </div>
           </div>
           <div class="row input-value">
             <div class="col-6 firstname">

             <div class="mb-3 form-group">

             <input type="text" name="first_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
  
   
           </div>
           </div>
           <div class="col-6 lastname">

             <div class="mb-3 form-group">

             <input name="last_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Password"/>
  
   
           </div>
           </div>
           </div>
           
         
         </div>
         <div class="mb-3 form-group">

<label for="exampleInputEmail1" class="form-label">Username</label>
<input type="text" name="user_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>

</div>
           <div class="mb-3 form-group">

           <label for="exampleInputEmail1" class="form-label">Email address</label>
           <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
   
           </div>
            <div class="mb-3 form-group">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password"/>
             </div>
              <div class="form-group"><button type="submit" class="Create1 w-100">Create Account</button></div>
             </form>
              <div class="form-content text-center mt-3 mb-3"> 
               <div class="row">
              
              <div class="col-12 mt-2 mb-2">
               <p class="account">Already have an account? <a href="">Login to Account</a></p>
             </div>
             
             </div>
           </div>
       </div>
     </div>
   </div>

 </div>
    </>
  )
}

export default page