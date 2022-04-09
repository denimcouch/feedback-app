import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is what feedback text should look like.')

  return (
    <div className="card feedbackCard">
      <div className="num-display feedbackCard__num-display">
        { rating }
      </div>
      <div className="text-display feedbackCard__text-display">
        { text }
      </div>
    </div>
  )
}

export default FeedbackItem