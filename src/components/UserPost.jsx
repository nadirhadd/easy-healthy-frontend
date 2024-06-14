import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserPost = ({ username }) => {
  return (
    <div className='flex items-center p-5 text-2xl'>
      <FontAwesomeIcon icon={faUser} className='px-5' />
      <h1>{username}</h1>
    </div>
  )
}

export default UserPost