// EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${id}`)
      .then(response => {
        const blog = response.data;
        setTitle(blog.title);
        setContent(blog.body_markdown); // assuming we're editing markdown content
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
      });
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    alert('Edit post functionality not implemented');
    // Logic to handle post editing would go here (needs backend API)
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Edit Post</h1>
      <form onSubmit={handleEdit}>
        <div className="mb-5">
          <label className="block text-xl font-semibold mb-2">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-xl font-semibold mb-2">Content</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
