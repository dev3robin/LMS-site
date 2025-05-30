
import { gsap } from 'gsap';
import { useState,useEffect,useRef} from "react";
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { setOtpData } from '../../redux/otpSlice';
import { useDispatch } from 'react-redux';
const Login= () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const loginRef = useRef(null);

  useEffect(() => {
    if (loginRef.current) {
      gsap.fromTo(
        loginRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  const SERVICE_ID = 'service_w4tq7db';
  const TEMPLATE_ID = 'template_toocchm';
  const PUBLIC_KEY = '-omfr_kN7GSPMGend';
  
  const genOtp = Math.floor(1000 + Math.random() * 9000).toString();
  
  const sendOtp = async (e) => {
    e.preventDefault();
    const templateParams = {
      user_email: email,
      message: `Your OTP is: ${genOtp}`,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      dispatch(setOtpData({ email, otp: genOtp,context:'login' }));
      setEmail('')
      navigate("/otpCard")

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };
  return (
    <div className="login-Container logsign"ref={loginRef}>
      <div className='w-[60%] md:w-full'><img src="/logSign-logo/signupImg.png" alt="" /></div>
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
