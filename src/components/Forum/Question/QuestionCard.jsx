import React from 'react'
import styles from '../../../style'
import { UserPost, QuestionList, QuestionForm } from '../../index'

const QuestionCard = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <UserPost/>
      <div>
        <QuestionList/>
      </div>
    </div>
  )
}

export default QuestionCard
