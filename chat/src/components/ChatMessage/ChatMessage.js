import React from 'react'
import './ChatMessage.css'
import PropTypes from 'prop-types';

const ChatMessage = ({ from, message, id, time }) =>
<div>
  <p className="message-text">
     <i className="author">{ from }</i> { message }
  </p>
  <p className="message-date"> {time}</p>
</div>

ChatMessage.propTypes = {
  from: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default ChatMessage;
