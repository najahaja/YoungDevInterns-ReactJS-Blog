import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image.jpeg'; // Ensure this path is correct

const Homepage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }} // Set the background image
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-20 animate-colorChange text-white">Welcome to the Blog</h1>
          <Link
            to="/blogs"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
          >
            View Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
