import PropTypes from 'prop-types';

import "../styles/Entries.css";

export const CaptionedFigure = props => {
  return (
    <>
      <div className={props.containerClass}>
        <img src={props.imgPath} className="c-inset-img" />
        <i>{ props.caption }</i>
      </div>
    </>
  )
}

CaptionedFigure.propTypes = {
  containerClass: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

export const ConversationLine = props => {
  return (
    <>
      <div className="c-single-message">
        <span className="c-name">{ props.name }:</span>
        <span className="c-text">{ props.text }</span>
      </div>
    </>
  )
}

ConversationLine.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
