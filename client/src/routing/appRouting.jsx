import { Routes,Route } from "react-router-dom";
import Home from "../components/Home/home";
import SignUp from "../components/LoSignUp/signUp";
import Login from "../components/LoSignUp/login";
import CourseDetails from "../components/courseDetails/courseDetails";
import Dashboard from "../components/dashboard/dashboard";
import OtpCard from "../components/LoSignUp/otp";
import TDashboard from "../components/dashboard/components/teacherDashboard";
import Cart from "../components/cart/cart";
const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courseDetails" element={<CourseDetails />} />
          <Route path="/student-dashboard" element={<Dashboard />} />
          <Route path="/teacher-dashboard" element={<TDashboard />} />
          <Route path="/otpCard" element={<OtpCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
  );
};

export default AppRoutes;
