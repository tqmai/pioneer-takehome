/**
 * ************************************
 *
 * @module  ChatroomContainer.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description container for each chatroom
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatboxContainer from './ChatboxContainer';

const drawerWidth = 240;

// Material-UI uses a 'CSS-in-JS' approach to styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function ChatroomContainer({ username, pageName }) {
  // this is used for Material-UI to access the CSS we defined above
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="General">
            <ListItemText primary="General" />
          </ListItem>
          <ListItem button key="Ideas">
            <ListItemText primary="Ideas" />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem>
            <ListItemText>
              Random questions asked:
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              0
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChatboxContainer username={username} />
      </main>
    </div>
  );
}

ChatroomContainer.propTypes = {
  username: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default ChatroomContainer;
