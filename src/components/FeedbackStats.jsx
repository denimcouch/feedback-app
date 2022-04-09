import PropTypes from "prop-types"

function FeedbackStats({ feedback }) {
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedbackStats feedback-stats'>
      <h4 className='feedbackStats__title'>{feedback.length} Reviews</h4>
      <h4 className='feedbackStats__avg-rating'>Average Rating: {isNaN(avg) ? '0' : avg}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats
