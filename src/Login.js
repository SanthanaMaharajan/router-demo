import React, { useEffect, useState } from 'react';
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Login(){

    const [password,setpassword]=useState("password")
    function handlepassword(){
        password==="password"? setpassword("text") : setpassword("password")
    }

    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('auth')) navigate('/')
    },[]) 
    function handleSubmit(e){
        e.preventDefault()
        if(e.target.elements.email.value==="xxx@yyy.com"){
            if(e.target.elements.pwd.value==="123"){
                navigate("/")
                localStorage.setItem("auth",true)
            }else{
                alert("Enter correct password")
            }
        }
        else{
            alert("Enter correct username or password")
        }
    }
    return(
        <div className='body-container'>
            <div className='container-signin'>
                <div className='form-container sign-in-container'>
                    <form id="signIn-form" onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" className="social"><BsFacebook /></a>
                            <a href="#" className="social"><IoLogoTwitter /></a>
                            <a href="#" className="social"><FaGoogle/></a>
                        </div> 
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" required/>
                        <input type={password} placeholder="Password"  name="pwd" required/>
                        <div class="showPass">
                            <input type="checkbox" onChange={handlepassword} name="showPassword" id="typePass"/>
                            <label for="showPassword">Show Password</label>
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button type="submit" className='btn'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login;