// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://dev.to/api/articles')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
      <Link to="/admin/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-5 inline-block">
        Create New Post
      </Link>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-5 shadow-md rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
            </div>
            <div className="flex space-x-3">
              <Link
                to={`/admin/edit/${blog.id}`}
               
              >
                 <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white'>Edit</button>
              </Link>
              <button
               
                onClick={() => alert('This is Najah\'s Blog site. It is not an official website for managing blog posts, so the delete functionality has not been implemented.')}
              >
                 <button className='bg-red-500 hover:bg-red-600  px-4 py-2 rounded-lg text-white'>Delete</button>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
