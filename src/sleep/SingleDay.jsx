import PropTypes from 'prop-types';
import './SingleDay.css';

export const SingleDay = props => {

  return (
    <>
      <div className="c-single-day">
        { props.day }
      </div>
    </>
  )
}

SingleDay.propTypes = {
  day: PropTypes.string.isRequired
}

export default SingleDay;
