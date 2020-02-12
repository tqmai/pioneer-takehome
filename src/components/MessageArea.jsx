/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/**
 * ************************************
 *
 * @module  MessageArea.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description component where messages are rendered
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessageArea({ messages }) {
  const formattedMessages = messages.map(({ username, message }, index) => {
    return <Message key={index} username={username} message={message} />;
  });

  return (
    <div>
      {formattedMessages}
    </div>
  );
}

MessageArea.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageArea;
