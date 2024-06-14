import React from 'react'
import styles from '../../../style'

const CommentForm = () => {
  return (
    <div className='py-5'>
      <form className={`${styles.paddingX}`}>
        <textarea name="comment" id="comment" placeholder='Tambah Komentar' className='rounded-xl p-2 w-full outline-0 focus:ring-stone-100 focus:ring-2'/>
        <button type="submit" className='bg-white px-5 py-1 rounded-md'>Post</button>
      </form>
    </div>
  )
}

export default CommentForm
