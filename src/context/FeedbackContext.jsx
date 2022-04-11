import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 10,
      text: 'This is coming from context',
      rating: 10,
    },
  ])

  const addFeedback = (feedbackObj) => {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(feedbackObj),
    }

    fetch('http://localhost:5050/feedback', postOptions)
      .then((res) => res.json())
      .then((data) => setFeedback(() => [data, ...feedback]))
  }

  const deleteFeedback = (id) => {
    fetch(`http://localhost:5050/feedback/${id}`, { method: 'DELETE' }).then(
      setFeedback(() => [...feedback.filter((item) => item.id !== id)])
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
