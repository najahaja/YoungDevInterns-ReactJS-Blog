import React from 'react';
import profilePhoto from '../assets/profile.jpg'; 
const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="md:ml-6 text-left">
          <h1 className="text-5xl font-bold mb-2">About Me</h1>
          <div className=" w-32 h-32 mb-4  md:mb-2 md:w-56 md:h-56  ">
          <img src={profilePhoto} alt="Profile" className=" w-full justify-center h-full object-cover" />
        </div>
          <p className="text-lg text-gray-700 mb-4">
          Hi, I'm Ahamed Najah. Currently, I'm pursuing a degree in Computer Engineering and interning as a React.js developer at YoungDevIntern. This blog is a project assigned by my company, and I’m using the Dev.to API to build it as part of my internship.</p>
          <p className="text-lg text-gray-700 mb-4">
            My primary goal is to become an AI Engineer, and I am dedicated to working towards this by learning and experimenting with various AI technologies. Through this blog, I aim to share my progress, insights, and experiences with others interested in technology and AI.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to connect with me on my social media platforms or reach out if you have any questions or just want to chat about AI and technology!
          </p>
          <div className="flex justify-center md:justify-center  space-x-4 m-8">
            <a href="https://www.linkedin.com/in/ahamednajah/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/najahaja" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/najahahamed/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600">
  <i className="fa-brands fa-instagram fa-2x"></i>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
