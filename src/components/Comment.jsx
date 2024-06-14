import React from 'react'
import styles from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Comment = ({ comment }) => {
  return (
    <div className='px-10 pb-10'>
      <div className={`${styles.paddingX} flex items-center pb-2`}>
        <FontAwesomeIcon icon={faUser} className='px-5 text-xl'/>
        <h1 className='text-xl'>User</h1>
      </div>
      <div className={`px-10 pb-10 text-md ${styles.paddingX}`}>
        <h1>{comment}</h1>
      </div>
    </div>
  )
}

export default Comment