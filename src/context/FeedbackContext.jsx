import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const data = await fetch(
      'http://localhost:5050/feedback?_sort=id&order=desc'
    ).then((res) => res.json())
    setFeedback(data)
    setLoading(false)
  }

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
    setFeedbackEdit({
      ...feedbackEdit,
      edit: false,
      item: {},
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        loading,
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
