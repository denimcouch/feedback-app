import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { MdClose, MdEdit } from 'react-icons/md'

function FeedbackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  const { id, rating, text } = feedback

  return (
    <Card className='feedbackCard'>
      <div className='num-display feedbackCard__num-display'>{rating}</div>
      <button className='edit' onClick={() => editFeedback(feedback)}>
        <MdEdit fontSize={24} />
      </button>
      <button className='close' onClick={() => deleteFeedback(id)}>
        <MdClose fontSize={24} />
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
