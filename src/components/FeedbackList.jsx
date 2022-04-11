import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return (
      <div className='feedbackList feedbackList--empty'>
        <h4>No Feedback Yet</h4>
      </div>
    )
  }

  return (
    <div className='feedbackList'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={index}
              feedback={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedbackList'>
  //     {feedback.map((item, index) => (
  //       <FeedbackItem key={index} feedback={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default FeedbackList
