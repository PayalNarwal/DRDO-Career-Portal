import React from "react";

const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-96 flex justify-start px-8 text-white"
      style={{
        backgroundImage: 'url("../../public/drdo-bg-banner.jpg")', // Path to your background image
      }}
    >
      <div className="mt-10 p-4 rounded-md">
        <h1 className="text-3xl md:text-5xl font-bold style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}">
          Explore Careers at DRDO
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join India's leading defense research organization and contribute to
          groundbreaking innovations.
        </p>
      </div>
    </header>
  );
};

export default Header;
