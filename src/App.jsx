/**
 * ************************************
 *
 * @module  App.jsx
 * @author Timothy Mai
 * @date 2/11/20
 * @description outer container of app, appended to DOM on #root
 *
 * ************************************
 */

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from './components/Welcome';
import ChatroomContainer from './containers/ChatroomContainer';

function App() {
  // variable to keep track of username
  const [username, setUsername] = useState('friend');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <ChatroomContainer pageName="Home" hasChatbox={false} username={username} />
          </Route>
          <Route path="/general">
            <ChatroomContainer pageName="General" hasChatbox username={username} />
          </Route>
          <Route path="/ideas">
            <ChatroomContainer pageName="Ideas" hasChatbox username={username} />
          </Route>
          <Route path="/">
            <Welcome setUsername={setUsername} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
