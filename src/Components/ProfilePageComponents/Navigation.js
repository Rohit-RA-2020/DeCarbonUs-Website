import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className= "fixed top-0 left-0 h-screen w-64 bg-gray-800 flex-none p-6 overflow-y-auto navbar">
      <button
        className="block text-gray-500 hover:text-white mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <ul className="navbar-menu">
          <li className="text-white font-medium">
            <a href="#" className="block py-2 text-gray-300 hover:text-white">Home</a>
          </li>
          <li className="text-white font-medium">
            <a href="#" className="block py-2 text-gray-300 hover:text-white">About</a>
          </li>
          <li className="text-white font-medium">
            <a href="#" className="block py-2 text-gray-300 hover:text-white">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;