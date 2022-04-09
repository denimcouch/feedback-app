import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback }) {
  return (
    <div className="feedbackList">
      {feedback.map((feedback, index) => (
      <FeedbackItem key={index} feedback={feedback} />
      ))}
    </div>
  )
}

export default FeedbackList