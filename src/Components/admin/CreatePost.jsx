// CreatePost.jsx
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    alert('Create post functionality not implemented');
    // Logic to handle post creation would go here (needs backend API)
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Create New Post</h1>
      <form onSubmit={handleCreate}>
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
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
