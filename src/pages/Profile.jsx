import React, { useState, useEffect } from 'react'
import { Footer, Navbar, Prof } from "../components/index"
import styles from '../style'

const Profile = () => {
  return (
    <section className={`bg-primary w-full overflow-hidden`}>
      <div className={`${styles.paddingX}`}>
        <Navbar/>
        <div className={`${styles.flexCenter} ${styles.paddingY} pb-10 font-bold font-mont text-4xl`}>
          Profile
        </div>
        <Prof/>
      </div>

      <div>
        <Footer/>
      </div>
    </section>
  )
}

export default Profile