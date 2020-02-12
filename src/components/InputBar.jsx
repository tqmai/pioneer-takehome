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

function InputBar() {
  return (
    <div>
      <form>
        <span>
          <TextField />
          <Button>
            Random Question!
          </Button>
          <Button>
            Send
          </Button>
        </span>
      </form>
    </div>
  );
}

export default InputBar;
