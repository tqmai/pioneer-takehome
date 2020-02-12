/**
 * ************************************
 *
 * @module  InputBar.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description bar with input field, random question button, and submit button
 *
 * ************************************
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const buttonsOffset = 275;

const useStyles = makeStyles((theme) => ({
  root: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',
    padding: 10,
    borderRadius: '10px',
  },
  input: {
    width: `calc(100% - ${buttonsOffset}px)`,
    marginRight: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

function InputBar({ username, setRandomQuestionsAsked, messages, setMessages }) {
  const classes = useStyles();

  // input field stateful component
  const [inputValue, setInputValue] = useState('');

  // function to handle input changes
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  // function handling submitting username
  function handleSubmit(event) {
    event.preventDefault();

    // create new message object and add it to the messages array
    const message = {
      username,
      message: inputValue,
    };

    const newMessages = [...messages, message];

    // adds new message to state
    setMessages(newMessages);

    setInputValue('');
  }

  // function handling user pressing enter
  function handleEnterPress(event) {
    return event.keyCode === 13 ? handleSubmit() : null;
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <span>
          <TextField
            id="message"
            variant="filled"
            onChange={handleChange}
            onKeyPress={handleEnterPress}
            className={classes.input}
          />
          <Button variant="outlined" className={classes.button}>
            Random Question!
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </span>
      </form>
    </div>
  );
}

InputBar.propTypes = {
  username: PropTypes.string.isRequired,
  setRandomQuestionsAsked: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default InputBar;
