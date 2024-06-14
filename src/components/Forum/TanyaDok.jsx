import React from 'react'
import {  CommentCard, QuestionCard, QuestionForm, QuestionList } from '../index.js'
import styles from '../../style.js'

const TanyaDok = () => {
  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.boxWidth} bg-[#bfbdbd] p-10 rounded-xl`}>
        <QuestionCard/>
        <div>
          <CommentCard/>
        </div>
      </div>
        <div className={`${styles.boxWidth} py-10 w-full`}>
          <QuestionForm/>
        </div>
    </section>
  )
}

export default TanyaDok
