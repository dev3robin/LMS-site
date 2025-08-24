import { Routes,Route } from "react-router-dom";
import Home from "../components/Home/home";
import SignUp from "../components/LoSignUp/signUp";
import Login from "../components/LoSignUp/login";
import CourseDetails from "../components/courseDetails/courseDetails";
import OtpCard from "../components/LoSignUp/otp";
import TDashboard from "../components/dashboard/teacherDashboard";
import Cart from "../components/cart/cart";
import Assesment from "../components/assesment/assesment";
import Notes from "../components/notes/note";
import AuthorDashboard from "../components/dashboard/author/authorDash";
import Dashboard from "../components/dashboard/student/dashboard";
import FeaturedCourses from "../components/featuredCourse/featuredCourses";
const AppRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<FeaturedCourses />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courseDetails/:id" element={<CourseDetails />} />
          <Route path="/student-dashboard/:id" element={<Dashboard />} />
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
