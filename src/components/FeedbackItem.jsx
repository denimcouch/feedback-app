import Card from './shared/Card'

function FeedbackItem({ feedback }) {
  const { rating, text } = feedback
  return (
    <Card className='feedbackCard'>
      <div className='num-display feedbackCard__num-display'>{rating}</div>
      <div className='text-display feedbackCard__text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.defaultProps = {
  feedback: {
    rating: 7,
    text: 'Dummy text is here!',
  },
}

export default FeedbackItem
