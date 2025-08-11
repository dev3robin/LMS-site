
import { gsap } from 'gsap';
import { useState,useEffect,useRef} from "react";
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { setOtpData } from '../../redux/otpSlice';
import { useDispatch } from 'react-redux';
import { getAllFromStore, saveToStore } from '../../idbHelper';
import { AUTHDATA, PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from './auth';
const SignUp = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const signUpRef = useRef(null);

  const nameInputRef = useRef(null);
  const [nameLabelVisible, setNameLabelVisible] = useState(true);
  const emailInputRef = useRef(null);
  const [emailLabelVisible, setEmailLabelVisible] = useState(true);


  const [allUsers,setAllUsers]=useState([])
  const [role,setRole]=useState("student")

  const [userData, setUserData] = useState({
    UserName: "",
    UserEmail: "",
    Status: "student",
    RoleApply:role

  });

  useEffect(() => {
    setUserData(prev => ({
      ...prev,
      RoleApply:role,
      Status: (role === 'author' || role === 'teacher') ? 'pending' : 'student'
    }));
  }, [role]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    useEffect(()=>{
      const fetchUsers= async ()=>{
        const allstudents=await getAllFromStore("users");
        const allauthors=await getAllFromStore("authors");
        const allteachers=await getAllFromStore("teachers");
        const all=[...allstudents, ...allauthors, ...allteachers]
        setAllUsers(all)
      }
      fetchUsers()
    },[])
  useEffect(() => {
    if (signUpRef.current) {
      gsap.fromTo(
        signUpRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);


  const genOtp = Math.floor(1000 + Math.random() * 9000).toString();
  const sendOtp = async (e) => {
    e.preventDefault();
    const templateParams = {
      user_email: userData.UserEmail,
      message: `Your OTP is: ${genOtp}`,
    };

    try {
      const findUser = allUsers.find(user=>user.userEmail === userData.UserEmail)
      if(!findUser){
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        dispatch(setOtpData({ email: userData.UserEmail, otp: genOtp,userName:userData.UserName, context:'signUp',userRole:userData.RoleApply,Status:userData.Status }));
        alert("otp send successffully")
        navigate("/otpCard") 
      }else{
        alert("This email is already inuse")
      }

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
  <div className='signup-container logsign'ref={signUpRef}>
      <div className='w-[60%] md:w-full'><img src="/logSign-logo/signupImg.png" alt="" /></div>
      <div className='signup-card lscard'>
        <div className="signupInput inclass">
          <div className='heading'><h1>Sign up with email</h1></div>
          <div className='checkP'>
            <input type="checkbox"/>
            <p>
              Send me special offers,personalized recommendation, and learning tips
            </p>
          </div>
          <div className='name'>
            <input 
              ref={nameInputRef}
              type="text" name='UserName'
              value={userData.UserName} 
              onChange={handleInputChange}
              onFocus={() => setNameLabelVisible(true)}
              onBlur={() => {
                if (nameInputRef.current.value.trim() !== "") {
                  setNameLabelVisible(false);
                }
              }}
            />
             <label
                className={`transition-opacity duration-300 ${nameLabelVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                Full name
              </label>
          </div>

          <div className='email'>
            <input 
              ref={emailInputRef}
              type="text"name='UserEmail'
              value={userData.UserEmail} 
              onChange={handleInputChange}
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
          <div className='text-sm' >
            <span >Select Role :</span>
            <select name="role" required 
               className='p-3 outline-0'
               value={role}
              onChange={(e) =>
                setRole(e.target.value )
              } >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div><button onClick={sendOtp}><span><EmailIcon /></span> Continue with email</button></div>
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