import React from 'react';

function CommentItems({ comment }) {
  return (
    <li className="bg-gray-100 rounded-lg shadow-sm p-4">
      <p className="text-gray-700">{comment.content}</p>
    </li>
  );
}

export default CommentItems;