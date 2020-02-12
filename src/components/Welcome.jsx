/**
 * ************************************
 *
 * @module  Welcome.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description page where user submits their name
 *
 * ************************************
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Material-UI uses a 'CSS-in-JS' approach to styling
const useStyles = makeStyles({
  root: {
    'text-align': 'center',
    marginTop: 50,
  },
  text: {
    marginTop: 20,
  },
});

function Welcome() {
  // this is used for Material-UI to access the CSS we defined above
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Typography variant="h4">
          Welcome! What is your name?
        </Typography>
        <form>
          <TextField
            id="name"
            label="Name"
            fullWidth
            className={classes.text}
          />
          <Button
            variant="contained"
            className={classes.text}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Welcome;
