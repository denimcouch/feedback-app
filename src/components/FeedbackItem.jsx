function FeedbackItem({ feedback }) {
  const { rating, text } = feedback
  return (
    <div className='card feedbackCard'>
      <div className='num-display feedbackCard__num-display'>{rating}</div>
      <div className='text-display feedbackCard__text-display'>{text}</div>
    </div>
  )
}

FeedbackItem.defaultProps = {
  feedback: {
    rating: 7,
    text: 'Dummy text is here!',
  },
}

export default FeedbackItem
