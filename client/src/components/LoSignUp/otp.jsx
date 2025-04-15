import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "./otpInput";
import Countdown from "./timer";

function OtpCard() {
  const navigate = useNavigate();
    const length=4;
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const email = localStorage.getItem("email");

  const verifyOtp = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp: otp.join("") }),
    });

    const data = await res.json();
    if (res.ok) {
      navigate("/dashboard");
    } else {
      alert(data.message || "OTP verification failed");
    }
  };

  return (
    <div className="otp flex m-10 rounded-xs">
      {/* <div><img src="/logSign-logo/signupImg.png" alt="" /></div> */}
      <form onSubmit={verifyOtp}className="shadow-xl p-4 flex flex-col items-center gap-4">
        <img src="/logSign-logo/otp.PNG" alt="" />
        <h2 className="">Verify email address</h2>
        <p className="text-xs">Verification code sent to <span className="text-blue-300">{email}</span></p>
        <OtpInput length={length}otp={otp} setOtp={setOtp} />
        <button type="submit"className="bg-purple-500 w-full px-2.5 py-1.5 rounded">Verify OTP</button>
        <div><Countdown /></div>
      </form>
    </div>
  );
}

export default OtpCard;
