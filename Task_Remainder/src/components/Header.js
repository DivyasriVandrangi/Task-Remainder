import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ props, onAdd, showAdd }) => {
    return (
        <header className='header'>
          <h1>{props}</h1>  
          <Button color={showAdd ? 'violet' : 'tomato'} 
          text={showAdd ? 'close' : 'Add'} 
          onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//    color: 'red', 
//    backgroundColor: 'black'
//
//}

export default Header
