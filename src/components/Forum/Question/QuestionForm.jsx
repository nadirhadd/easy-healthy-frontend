import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/questions', { title, content });
      console.log(response.data);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('connection not found' ,error); // Handle errors (optional)
    }
  };

  return (
    <div className='w-full bg-accent p-5 rounded-xl'>
      <form onSubmit={handleSubmit} className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-white">Ask a Question</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl mb-1 text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-input w-full py-2 px-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-xl mb-1 text-white">
            Content
          </label>
          <textarea
            id="content"
            className="form-textarea w-full p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary bg-gray-300 px-4 py-2 rounded-lg">
          Post
        </button>
      </form>
    </div>
  )
}

export default QuestionForm