import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='signup-container logsign'>
      <div><img src="/logSign-logo/signupImg.png" alt="" /></div>
      <div className='signup-card lscard'>
        <div className="signupInput inclass">
          <div className='heading'><h1>Sign up with email</h1></div>
          <div className='checkP'><span><input type="checkbox" name="" id="" /></span><p>
            Send me special offers,personalized recommendation, and learning tips
          </p></div>
          <div className='name'><input type="text" /><label>Full name</label></div>
          <div className='email'><input type="text"/><label >Email</label></div>
          <div><button><span><EmailIcon /></span> Continue with email</button></div>
        </div>
        <div className='hr'><hr /><span>Other sign up options</span><hr /></div>
        <div className="mediaIcon">
          <button><img src="/logSign-logo/google.png" alt="" height='25px'
          width="25px"/></button>
          <button><img src="/logSign-logo/facebook.png"  height='25px'width="25px"alt="" /></button>
          <button><img src="/logSign-logo/apple-logo.png"height='25px' width="25px" alt="" /></button>
        </div>
        <footer>
          By signing up, you agree to our <span>Terms of use </span> and <span>Privacy policy</span>
        </footer>
        <div className='switching'><span>Already have an account ?</span><Link to="/login"><li>login</li></Link></div>
      </div>
    </div>
  )
}

export default SignUp