import styles from '../../../style'
import { CommentForm, CommentList, UserPost } from '../../index'

const CommentCard = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.paddingX}`}>
      <UserPost/>
      <div>
        <CommentList/>
      </div>
      <CommentForm/>
    </div>
  )
}

export default CommentCard
