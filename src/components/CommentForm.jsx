import React from 'react'

const CommentForm = ({ newComment, setNewComment, handleCommentSubmit }) => {
  return (
    <div className='px-10'>
      <form onSubmit={handleCommentSubmit} className='pb-3'>
        <h1 className='py-5 text-xl font-bold'>Tambahkan Komentar</h1>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full h-20 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        placeholder="Tulis komentar Anda..."/>
      </form>
      <button type="submit" className='bg-accent px-5 py-2 hover:bg-[#7d7d7d] rounded-xl'>
        Post
      </button>
    </div>
  )
}

export default CommentForm