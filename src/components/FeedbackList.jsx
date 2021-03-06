import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { CircularProgress } from '@mui/material'
import Card from './shared/Card'

function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext)

  if (loading) {
    return (
      <Card>
        <CircularProgress color="secondary" size={100}/>
      </Card>
    )
  }

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
            <FeedbackItem key={index} feedback={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
