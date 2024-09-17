import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto my-4 text-center grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center md:justify-start space-x-4">
        <a href="https://www.linkedin.com/in/ahamednajah/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fa-brands fa-linkedin fa pr-1"></i>
           LinkedIn </a>
            <a href="https://github.com/najahaja" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-600">
              <i className="fa-brands fa-github fa pr-1"></i>
            Github</a>
            <a href="https://www.instagram.com/najahahamed/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600">
  <i className="fa-brands fa-instagram fa pr-1"></i>Instagram
</a> </div>
        <p className=" flex justify-center  ">© 2024 My Blog. All rights reserved.</p>
        <p>Blog content sourced from <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Dev.to</a></p>
      </div>
    </footer>
  );
};

export default Footer;
