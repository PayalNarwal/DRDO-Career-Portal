import React from "react";
import { useNavigate } from "react-router-dom";

const NavSimple = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white font-sans w-full">
      <div className="container mx-auto flex items-center justify-evenly py-3">
        <img
          onClick={goToHome}
          className="max-h-13 p-2"
          src="../../public/drdo_logo_header.png"
          alt="DRDO Logo"
        />
      </div>
    </nav>
  );
};

export default NavSimple;
