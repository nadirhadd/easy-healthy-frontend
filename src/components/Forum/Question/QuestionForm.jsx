import React from 'react'
import {UserPost, QuestionList} from '../../index';
import styles from '../../../style';

const QuestionForm = () => {
  return (
    <div>
      <h1 className='py-4 text-xl font-semibold'>Tambah Pertanyaan</h1>
      <form>
        <textarea name="comment" id="comment" placeholder='Tambah Komentar' rows={3} className='rounded-xl p-2 w-full outline-0 focus:ring-gray-500 focus:ring-6'/>
        <button type="submit" className='bg-white px-5 py-1 rounded-md'>Post</button>
      </form>
    </div>
  )
}

export default QuestionForm
