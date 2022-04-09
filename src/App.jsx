import { useState, useEffect } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'

function App() {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetch('http://localhost:5050/feedback')
      .then((res) => res.json())
      .then((data) => setFeedback(() => data))
  }, [])

  const deleteFeedback = (id) => {
    console.log('Delete this item!', id)
    fetch(`http://localhost:5050/feedback/${id}`, { method: 'DELETE' })
     .then(setFeedback(() => [...feedback.filter((item) => item.id !== id)]))
  }

  return (
    <>
      <Header text='Hello World' />
      <main className='app container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </main>
    </>
  )
}

export default App
