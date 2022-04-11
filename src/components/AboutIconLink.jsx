import { MdHelpOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <MdHelpOutline size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
