import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://dev.to/api/articles')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-5 text-center">All Blogs from Dev.to</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={blog.cover_image || 'https://via.placeholder.com/400x200'}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <div className="flex justify-between items-center mt-3">
                <Link to={blog.url}>
                  <button className="p-2 rounded bg-slate-500 text-white hover:bg-slate-600">
                    Read More
                  </button>
                </Link>
                <div className="flex space-x-6">
                  <span className="flex items-center space-x-1">
                    <i className="fa-regular fa-heart"></i>
                    <span>{blog.public_reactions_count}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="fa-regular fa-comment"></i>
                    <span>{blog.comments_count}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
