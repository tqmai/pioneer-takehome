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

import React from 'react';
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

function InputBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <span>
          <TextField
            id="message"
            variant="filled"
            className={classes.input}
          />
          <Button variant="outlined" className={classes.button}>
            Random Question!
          </Button>
          <Button variant="contained" color="primary">
            Send
          </Button>
        </span>
      </form>
    </div>
  );
}

export default InputBar;
