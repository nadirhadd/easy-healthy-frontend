import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserPost = () => {
  return (
    <div className='flex items-start pb-1 text-2xl'>
      <FontAwesomeIcon icon={faUser} className='px-5' />
      <h1>User</h1>
    </div>
  )
}

export default UserPost