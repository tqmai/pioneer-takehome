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

function InputBar({ randomQuestionsAsked, setRandomQuestionsAsked, sendMessage }) {
  const classes = useStyles();

  // input field stateful component
  const [inputValue, setInputValue] = useState('');

  // function to handle input changes
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  // list of random questions
  const randomQuestions = [
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?',
    'If you could change anything about the way you were raised, what would it be?',
    'If you could wake up tomorrow having gained any one quality or ability, what would it be?',
    'What inspired you to go into your current field?',
    'Who is someone who inspires you?',
  ];

  // function to provide a random question
  function handleRandomQuestion() {
    // randomly choose a question from the array of questions and set it as the current input
    const randomQuestion = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
    setInputValue(randomQuestion);
  }

  // function handling submitting username
  function handleSubmit(event) {
    event.preventDefault();

    // check if input matches that of a random question
    // if yes, increment the number of random questions asked
    if (randomQuestions.includes(inputValue)) {
      setRandomQuestionsAsked(randomQuestionsAsked + 1);
    }

    // sends message via socket
    sendMessage(inputValue);

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
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleEnterPress}
            className={classes.input}
          />
          <Button variant="outlined" onClick={handleRandomQuestion} className={classes.button}>
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
  randomQuestionsAsked: PropTypes.number.isRequired,
  setRandomQuestionsAsked: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default InputBar;
