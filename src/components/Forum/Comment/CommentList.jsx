import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentItems from './CommentItems';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/comments');
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="mb-8">
      {comments.length > 0 ? (
        <ul className="list-none space-y-4">
          {comments.map((comment) => (
            <div>
              <CommentItems key={comment.id} comment={comment} />
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">There are no comments yet.</p>
      )}
    </div>
  );
}

export default CommentList;
