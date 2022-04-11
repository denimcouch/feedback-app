import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>This is the About Page</h1>
      <p>This is a React app to leave feedback for your app or service</p>
      <p>Version: 1.0.0</p>
      <Link to='/'>
        <Button version='secondary'>Return Home</Button>
      </Link>
    </Card>
  )
}

export default AboutPage
