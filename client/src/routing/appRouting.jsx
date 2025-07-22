import { Routes,Route } from "react-router-dom";
import Home from "../components/Home/home";
import SignUp from "../components/LoSignUp/signUp";
import Login from "../components/LoSignUp/login";
import CourseDetails from "../components/courseDetails/courseDetails";
import Dashboard from "../components/dashboard/dashboard";
import OtpCard from "../components/LoSignUp/otp";
import TDashboard from "../components/dashboard/teacherDashboard";
import Cart from "../components/cart/cart";
import Assesment from "../components/assesment/assesment";
import Notes from "../components/notes/note";
import AuthorDashboard from "../components/dashboard/autthorDash";
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
          <Route path="/assesment" element={<Assesment />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/author-dashboard" element={<AuthorDashboard />} />
          
        </Routes>
  );
};

export default AppRoutes;
