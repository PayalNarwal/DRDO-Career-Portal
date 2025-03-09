import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ApplyPage from "./pages/ApplyPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import "./output.css";
import AdminHomePage from "./pages/AdminHomePage";
import AdminJobEditPage from "./pages/AdminJobEditPage";
import AdminJobCreatePage from "./pages/AdminJobCreatePage";
import { loginSuccess } from './features/authSlice'; 
import AdminSignUp from "./pages/adminSignUp";
import AdminLoginPage from "./pages/AdminLoginPage";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userEmail = Cookies.get("userEmail");
    const isLoggedIn = Cookies.get("isLoggedIn") === "true";

    if (isLoggedIn && userEmail) {
      dispatch(loginSuccess({ email: userEmail }));
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />
        <Route path="/admin/:username" element={<AdminHomePage />} />
        <Route path="/admin/:username/new" element={<AdminJobCreatePage />} />
        <Route
          path="/admin/:username/edit/:jobID"
          element={<AdminJobEditPage />}
        />

        <Route path="/apply/:jobId" element={<ApplyPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
