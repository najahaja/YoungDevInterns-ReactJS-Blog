import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 hover:bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold animate-pulse">
          <Link to="/"><i className="fa-sharp-duotone fa-solid fa-blog text-blue-300 pr-4"></i>
            Najah's Blog
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <i className="fas fa-times fa-2x"></i> 
            ) : (
              <i className="fas fa-bars fa-2x"></i>
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 font-bold pr-12">
          <li><Link to="/" className="hover:text-blue-400"><i className="fas fa-home-alt pr-1"></i>Home</Link></li>
          <li><Link to="/blogs" className="hover:text-blue-400"><i className="fa-brands fa-blogger-b pr-1"></i>Blog</Link></li>
          <li><Link to="/admin" className="hover:text-blue-400"><i className="fa-solid fa-user-tie pr-1"></i>Admin</Link></li>
          <li><Link to="/about" className="hover:text-blue-400"><i className="fa-solid fa-user pr-1"></i>About Me</Link></li>
        </ul>
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col space-y-4 font-bold md:hidden">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-blue-400"><i className="fas fa-home-alt pr-1"></i>Home</Link></li>
            <li><Link to="/blogs" onClick={toggleMenu} className="hover:text-blue-400"><i className="fa-brands fa-blogger-b pr-1"></i>Blog</Link></li>
            <li><Link to="/admin" onClick={toggleMenu} className="hover:text-blue-400"><i className="fa-solid fa-user-tie pr-1"></i>Admin</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="hover:text-blue-400"><i className="fa-solid fa-user pr-1"></i>About Me</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
