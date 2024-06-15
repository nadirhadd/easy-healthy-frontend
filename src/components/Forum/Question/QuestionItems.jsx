import React from 'react';

function QuestionItems({ question }) {
  return (
    <li className="bg-gray-200 rounded-lg shadow-sm p-4">
      <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
      <p className="text-gray-700">{question.content}</p>
    </li>
  );
}

export default QuestionItems;