import React from 'react';

function Navbar() {
  return (
    <div className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 shadow-lg">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="2xl font-bold hidden md:inline">Imran Younas</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
      </div>
    </div>
  );
}

export default Navbar;
