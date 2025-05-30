import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "./otpInput";
import Countdown from "./timer";
import { login } from "../../redux/userSlice";
import { resetOtpData } from "../../redux/otpSlice";
import { addUser, getAllUsers } from "../../idbHelper";

function OtpCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allUsers,setAllUsers]=useState([])
  const length=4;
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const storedOtp = useSelector(state => state.otp.otp);
  const email = useSelector(state => state.otp.email);
  const context = useSelector(state => state.otp.context);
  const name = useSelector(state => state.otp.userName);

  const userId=name+storedOtp
  const userData={
    userId:userId,
    userName:name,
    userEmail:email
  }

  useEffect(()=>{
    const fetchUsers= async ()=>{
      const all=await getAllUsers();
      setAllUsers(all)
    }
    fetchUsers()
  },[])

  const verifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp === storedOtp) {
      if(context === "signUp"){
        addUser(userData)
        dispatch(resetOtpData());
        dispatch(login({ email }));
        alert('Verify success')
        navigate("/");
      }else{
        const findUser = allUsers.find(user=>user.userEmail === email)
        if(findUser){
          dispatch(resetOtpData());
          dispatch(login({ email }));
          navigate("/student-dashboard");
        }else{
          alert("User not Found")
        }
      }
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };


  return (
    <div className="otp flex m-10 rounded-xs">
      <form onSubmit={verifyOtp}className="shadow-xl p-4 flex flex-col items-center gap-4">
        <img src="/logSign-logo/otp.PNG" alt="" />
        <h2 className="">Verify email address</h2>
        <p className="text-xs">Verification code sent to <span className="text-blue-300">{email}</span></p>
        <OtpInput length={length}otp={otp} setOtp={setOtp} />
        <button type="submit"className="bg-purple-500 w-full px-2.5 py-1.5 rounded">Verify OTP</button>
        <div>Resend code in <Countdown time={2}  /></div>
      </form>
    </div>
  );
}

export default OtpCard;
