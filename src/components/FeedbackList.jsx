import FeedbackItem from './FeedbackItem'
import PropTypes from "prop-types"

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return (
      <div className='feedbackList feedbackList--empty'>
        <h4>No Feedback Yet</h4>
      </div>
    )
  }

  return (
    <div className='feedbackList'>
      {feedback.map((item, index) => (
        <FeedbackItem key={index} feedback={item} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
}

export default FeedbackList
