import PropTypes from 'prop-types'

function Header(props) {
  const { text } = props
  return (
    <header>
      <div className="container headerContainer">
        <h1 className="header__title">
          {text}
        </h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header