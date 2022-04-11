import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedbackStats feedback-stats'>
      <h4 className='feedbackStats__title'>{feedback.length} Reviews</h4>
      <h4 className='feedbackStats__avg-rating'>
        Average Rating: {isNaN(avg) ? '0' : avg}
      </h4>
    </div>
  )
}

export default FeedbackStats
