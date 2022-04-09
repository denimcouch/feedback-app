import { useState, useEffect } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

function App() {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetch('http://localhost:5050/feedback')
      .then((res) => res.json())
      .then((data) => setFeedback(() => data))
  }, [])

  const deleteFeedback = (id) => {
    fetch(`http://localhost:5050/feedback/${id}`, { method: 'DELETE' }).then(
      setFeedback(() => [...feedback.filter((item) => item.id !== id)])
    )
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

  return (
    <>
      <Header />
      <main className='app container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </main>
    </>
  )
}

export default App
