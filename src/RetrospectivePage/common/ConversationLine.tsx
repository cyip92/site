import PropTypes from 'prop-types';
import React from 'react';

export const ConversationLine = props => {
  const textClass = `c-dialogue-text ${props.strike ? "c-dialogue-strike" : ""}`;

  return (
    <>
      <div className="c-single-message">
        <span className="c-dialogue-name">{ props.name }{props.name === "" ? "" : ":"}</span>
        <span className={textClass}>{ props.text }</span>
      </div>
    </>
  )
};

ConversationLine.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  strike: PropTypes.bool,
};

export default ConversationLine;
