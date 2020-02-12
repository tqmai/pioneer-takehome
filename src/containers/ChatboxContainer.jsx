/* eslint-disable no-console */
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

import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
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

function ChatboxContainer({
  username,
  randomQuestionsAsked,
  setRandomQuestionsAsked,
  messages,
  setMessages,
}) {
  const classes = useStyles();

  // connecting to the server on the client side
  const socket = io('localhost:3001/');

  // function to send message (to be passed as a prop to inputBar)
  function sendMessage(inputValue) {
    console.log('message sent:', inputValue);

    // create new message object to add to the messages array in state
    const newMessage = {
      username,
      message: inputValue,
    };

    const newMessages = [...messages, newMessage];

    // adds new message to state
    setMessages(newMessages);

    // emit message via socket
    socket.emit('sendMessage', newMessage);
  }

  // function for receiving messages sent via socket
  socket.on('receiveMessage', (data) => {
    console.log('message received', data);

    // create new messages array to update state
    const newMessages = [...messages, data];

    // adds new message to state
    setMessages(newMessages);
  });

  return (
    <div>
      <div className={classes.messageArea}>
        <MessageArea messages={messages} />
      </div>
      <div className={classes.inputBar}>
        <InputBar
          username={username}
          randomQuestionsAsked={randomQuestionsAsked}
          setRandomQuestionsAsked={setRandomQuestionsAsked}
          sendMessage={sendMessage}
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

ChatboxContainer.propTypes = {
  username: PropTypes.string.isRequired,
  randomQuestionsAsked: PropTypes.number.isRequired,
  setRandomQuestionsAsked: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default ChatboxContainer;
