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
import { makeStyles } from '@material-ui/core/styles';
import MessageArea from '../components/MessageArea';
import InputBar from '../components/InputBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

function ChatboxContainer() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <MessageArea />
      </div>
      <div className={classes.inputBar}>
        <InputBar />
      </div>
    </div>
  );
}

export default ChatboxContainer;
