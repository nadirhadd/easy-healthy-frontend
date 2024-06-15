import React, { useState, useEffect } from 'react'
import styles from '../../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Prof = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser){
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.paddingX}`}>
        <div className={`bg-accent p-20 flex rounded-xl w-full`}>
          <FontAwesomeIcon icon={faCircleUser} className='text-9xl'/>
          {user ? (
            <div className={`text-2xl ${styles.paddingX}`}>
              <div className='pb-4'>
                <p className='text-lg'>Nama Lengkap</p>
                <p>{user.full_name}</p>
              </div>
              <div className='pb-4'>
                <p className='text-lg'>Username</p>
                <p>{user.username}</p>
              </div>
              {/* <div>
                <p>Email</p>
                <p>{user.email}</p>
              </div> */}
            </div>
          ): (
            <div className='mt-5 text-2xl'>
              Please Log in to see your profile information.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Prof