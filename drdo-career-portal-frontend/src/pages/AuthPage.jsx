import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    navigate(isSignUp ? "/login" : "/signup"); // Update URL
  };

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? '/signup' : '/login';
    try {
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert(isSignUp ? `Sign-up successful! ${data.message} ` : `Login successful! ${data.message}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md px-8 py-6 space-y-6 bg-white rounded-lg shadow-md">
      <img
          className="bg-primary rounded-sm p-4 "
          src="../../public/drdo_logo_header.png"
          alt="DRDO Logo"
        />
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isSignUp ? 'Create an Account' : 'Welcome Back!'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span
                onClick={toggleForm}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                onClick={toggleForm}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
    </>
  );
};

export default AuthPage;
