import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ApplyPage from "./pages/ApplyPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import "./output.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/admin" element={<AuthPage />} />
        <Route path="/apply/:jobId" element={<ApplyPage />} />
        <Route path="/job/:jobId" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
