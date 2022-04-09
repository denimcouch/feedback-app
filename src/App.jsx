import { useState, useEffect } from 'react'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'

function App() {
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetch('http://localhost:5050/feedback')
      .then((res) => res.json())
      .then((data) => setFeedback(() => data))
  }, [])

  return (
    <>
      <Header text='Hello World' />
      <main className='app container'>
        <FeedbackList feedback={feedback} />
      </main>
    </>
  )
}

export default App
