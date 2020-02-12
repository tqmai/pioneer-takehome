/**
 * ************************************
 *
 * @module  ChatboxContainer.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description container for chatbox components
 *
 * ************************************
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MessageArea from '../components/MessageArea';
import InputBar from '../components/InputBar';

const drawerWidth = 240;

const useStyles = makeStyles({
  messageArea: {
    height: '100%',
    marginBottom: '75px',
  },
  inputBar: {
    position: 'fixed',
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px - 50px)`,
    height: '90px',
    'background-color': 'white',
  },
});

function ChatboxContainer({ username, setRandomQuestionsAsked }) {
  const classes = useStyles();

  const [messages, setMessages] = useState([{username: 'Tim', message: 'hi'}]);

  return (
    <div>
      <div className={classes.messageArea}>
        <MessageArea messages={messages} />
      </div>
      <div className={classes.inputBar}>
        <InputBar
          username={username}
          setRandomQuestionsAsked={setRandomQuestionsAsked}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

ChatboxContainer.propTypes = {
  username: PropTypes.string.isRequired,
  setRandomQuestionsAsked: PropTypes.func.isRequired,
};

export default ChatboxContainer;
