import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/comments', { content });
      console.log(response.data);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('connection not found' ,error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Add a Comment
        </label>
        <textarea
          id="content"
          className="form-textarea w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary bg-gray-500 px-5 py-2 text-white rounded-xl">
        Post
      </button>
    </form>
  )
}

export default CommentForm