import React from 'react'

function page() {
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
       <form>

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

             <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
  
   
           </div>
           </div>
           <div class="col-6 lastname">

             <div class="mb-3 form-group">

             <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Password"/>
  
   
           </div>
           </div>
           </div>
           
         
         </div>
           <div class="mb-3 form-group">

           <label for="exampleInputEmail1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email"/>
   
           </div>
            <div class="mb-3 form-group">
             <label for="exampleInputPassword1" class="form-label">Password</label>
             <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password"/>
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