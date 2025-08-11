
import { gsap } from 'gsap';
import { useState,useEffect,useRef} from "react";
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { setOtpData } from '../../redux/otpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHDATA, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from './auth';
import { logout } from '../../redux/userSlice';
import { saveToStore } from '../../idbHelper';
const Login= () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isloggedIn=useSelector((state)=>state.user.isLoggedIn) 

  const loginRef = useRef(null);
  const emailInputRef = useRef(null);
  const [emailLabelVisible, setEmailLabelVisible] = useState(true);
  useEffect(() => {
    if (loginRef.current) {
      gsap.fromTo(
        loginRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);
 //first auth login
  useEffect(()=>{
    const addAuth= async ()=>{
      await saveToStore("authors",AUTHDATA)
    }
    addAuth()
  },[])
  
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
          <div className="heading">
            {isloggedIn?
            <div className='flex flex-col gap-3'>
              <h1>You're already logged in</h1>
              <button onClick={()=>{dispatch(logout())}}>switch account</button>
            </div>
            :
            <div>
              <h1>Log in continue your learning journey</h1>
              <div className='email'>
                <input 
                  ref={emailInputRef}
                  type="text"name='UserEmail'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailLabelVisible(true)}
                  onBlur={() => {
                    if (emailInputRef.current.value.trim() !== "") {
                      setEmailLabelVisible(false);
                    }
                  }}
                />
                <label
                    className={`transition-opacity duration-300 ${emailLabelVisible ? 'opacity-100' : 'opacity-0'}`}
                  >
                    Email
                  </label>
              </div>
          <button className='btn'onClick={sendOtp} >log In</button>
            </div>}
          </div>
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
