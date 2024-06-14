import { UserPost, Comment, CommentForm } from './index'
import React, {useEffect, useState} from 'react'
import styles from '../style'
import axios from 'axios'

const TanyaDok = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/')
    } catch (error) {
      
    }
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if(newComment.trim() !== ''){
      setComments([...comments, newComment]);
      setNewComment('');
    }
  }

  return (
    <section>
      <div className='bg-[#f5f5f5] p-10 rounded-xl'>
        <UserPost username="user"/>

        <div className={`${styles.boxWidth}`}>
          <div className='px-10 pb-10 text-lg'>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem esse recusandae accusantium? Saepe sequi repellat, libero quos ratione explicabo ipsum cum rem maxime iste beatae temporibus sint excepturi laboriosam! Officia.</h1>
          </div>

          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}

          <CommentForm
            newComment={newComment}
            setNewComment={setNewComment}
            handleCommentSubmit={handleCommentSubmit}
          />
        </div>
      </div>

      <div className={`${styles.paddingY}`}>
        <h1>Tambah Pertanyaan</h1>
      </div>
    </section>
  )
}

export default TanyaDok