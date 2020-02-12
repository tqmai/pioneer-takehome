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

const useStyles = makeStyles({

});

function Welcome() {
  return (
    <Container>
      <div>
        <Typography variant="h4">
          Welcome! What is your name?
        </Typography>
        <form>
          <TextField
            id="name"
            label="Name"
            fullWidth
            
          />
          <Button>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Welcome;
