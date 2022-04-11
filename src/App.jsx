import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'

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
    <Router>
      <Header />
      <main className='app container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
