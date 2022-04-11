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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

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

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
