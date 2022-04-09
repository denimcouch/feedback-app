import Card from './shared/Card'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'

function FeedbackItem({ feedback, handleDelete }) {
  const { id, rating, text } = feedback

  return (
    <Card className='feedbackCard'>
      <div className='num-display feedbackCard__num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(id)}>
        <MdDelete fontSize={24} />
      </button>
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

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
