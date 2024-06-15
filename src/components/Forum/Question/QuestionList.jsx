import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CommentForm, CommentList, QuestionItems } from '../../../components';
import styles from '../../../style';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="mb-8 w-full p-5">
      {questions.length > 0 ? (
        <ul className="list-none space-y-4">
          {questions.map((question) => (
            <div className='p-5 bg-gray-200 rounded-xl'>
              <QuestionItems key={question.userId} question={question} />
              <CommentList/>
              <CommentForm/>
            </div>
          ))}
        </ul>
      ) : (
        <p className={`text-gray-500 text-lg ${styles.flexCenter}`}>There are no questions yet.</p>
      )}
    </div>
  );
}

export default QuestionList;
