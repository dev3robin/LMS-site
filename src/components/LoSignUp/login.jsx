import React from 'react'

const Login= () => {
  return (
    <div className="login-Container logsign">
      <div><img src="./public/logSign-logo/signupImg.png" alt="" /></div>
      <div className="loginCard card">
        <div className="loginInput inclass">
          <div className="heading"><h1>Log in continue your learning journey</h1></div>
          <div className='email'><input type="text"/><label >Email</label></div>
          <button><span></span>Continue with email</button>
        </div>
        <div className='hr'><hr /><span>Other log in options</span><hr /></div>
        <div className="mediaIcon">
          <button><img src="./public/logSign-logo/google.png" alt="" height='25px'
          width="25px"/></button>
          <button><img src="./public/logSign-logo/facebook.png"  height='25px'width="25px"alt="" /></button>
          <button><img src="./public/logSign-logo/apple-logo.png"height='25px' width="25px" alt="" /></button>
        </div>
        <div className='switching'><span>Dont't have an account</span><li>Sign up</li></div>
      </div>
    </div>
  )
}

export default Login