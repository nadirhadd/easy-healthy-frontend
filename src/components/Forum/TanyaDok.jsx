import React from 'react'
import {  CommentCard, CommentForm, QuestionCard, QuestionForm, QuestionList } from '../index.js'
import styles from '../../style.js'

const TanyaDok = () => {
  return (
    <section className={`${styles.flexCenter} w-full flex-col`}>
      <QuestionList/>
      <div className='w-full'>
        <QuestionForm/>
      </div>
    </section>
  )
}

export default TanyaDok
