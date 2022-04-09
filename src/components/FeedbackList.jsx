import FeedbackItem from './FeedbackItem'

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

export default FeedbackList
