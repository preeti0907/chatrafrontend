
"use client";
import { signIn, csrfToken } from 'next-auth/react';

import { React, useState,useEffect } from 'react'
import { toast } from "react-toastify"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"

function page(){
    const router = useRouter();
  const { data: session } = useSession()
  useEffect(() => {
    if(session){
        router.push("/");
    }
  });

    const handleSubmit = async (event) => {

        event.preventDefault()

        var email = event.target.email.value;
        var password = event.target.password.value;
        if(email == ""){
            toast("Email is required", { type: "error" });
            return;
        }
        if(password == ""){
            toast("Password is required", { type: "error" });
            return;
        }

        signIn('credentials', {
            email,
            password,
            redirect: false
        }).then(({ ok, error }) => {
            if (ok) {
                toast("Login success", { type: "success" });
                router.push("/");
            } else {
                toast("Credentials do not match!", { type: "error" });
            }
        })
    }

    const [passwordType, setPasswordType] = useState("password");
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return (
        <>


            <div className="bg-img">

                <div className="container outer_body p-0 m-0">
                    <div className="row justify-content-center" id="login-detail">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-5 border main-div" >
                            <div className="logo">
                                <img src="assets/images/logo.jpeg" alt="logo-image" />
                                <h3>Login</h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                <div className="mb-3 form-group">

                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />

                                </div>
                                <div className="mb-3 form-group">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type={passwordType} name="password" className="form-control"  id="exampleInputPassword1" placeholder="Enter Your Password" />
                                    <span type="button" onClick={togglePassword} className="d-flex align-items-center">
                                                                    <i className={passwordType == "password" ? 'fas fa-eye me-3':'fas fa-eye-slash me-3'}  id="show_eye"></i>
                                    </span>
                                </div>
                                <div className="form-group"><button type="submit" className="Create1 w-100">Login</button></div>
                            </form>
                            <div className="form-content text-center mt-3 mb-3">
                                <div className="row">
                                    <div className="col-12">
                                        <a href="">Forgot Password?</a>
                                    </div>
                                    <div className="col-12 mt-2 mb-2">
                                        <p>Don't have an account <a href="">Create Account</a></p>
                                    </div>
                                    <div className="col-12">
                                        <h4 className="divide">Or</h4>
                                        <button type="submit" className=" w-100 google-btn"><img src="assets/images/2.jpeg" /> Continue With Google</button>
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