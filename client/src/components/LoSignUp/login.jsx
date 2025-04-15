import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Login= () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const sendOtp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("email", email); // Store email for OTP step
      navigate("/otpCard");
    } else {
      alert(data.message || "Failed to send OTP");
    }
  };
  
  return (
    <div className="login-Container logsign">
      <div><img src="/logSign-logo/signupImg.png" alt="" /></div>
      <div className="loginCard lscard">
        <div className="loginInput inclass">
          <div className="heading"><h1>Log in continue your learning journey</h1></div>
          <div className='email'>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            <label >Email</label>
          </div>
          <button className='btn'onClick={sendOtp} >Continue with email</button>
        </div>
        <div className='hr'><hr /><span>Other log in options</span><hr /></div>
        <div className="mediaIcon">
          <button><img src="/logSign-logo/google.png" alt="" height='25px'
          width="25px"/></button>
          <button><img src="/logSign-logo/facebook.png"  height='25px'width="25px"alt="" /></button>
          <button><img src="/logSign-logo/apple-logo.png"height='25px' width="25px" alt="" /></button>
        </div>
        <div className='switching'><span>Dont't have an account</span><Link to="/signUp"><li>Sign up</li></Link></div>
      </div>
    </div>
  )
}

export default Login
