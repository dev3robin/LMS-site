import { Routes,Route } from "react-router-dom";
import Home from "../components/Home/home";
import SignUp from "../components/LoSignUp/signUp";
import Login from "../components/LoSignUp/login";
import CourseDetails from "../components/courseDetails/courseDetails";
import Dashboard from "../components/dashboard/dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courseDetails" element={<CourseDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
