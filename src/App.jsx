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
import Welcome from './components/Welcome';
import ChatroomContainer from './containers/ChatroomContainer';

function App() {
  // variable to keep track of username
  const [username, setUsername] = useState('friend');

  return (
    <div>
      {/* <Welcome setUsername={setUsername} /> */}
      {/* <Welcome /> */}
      <ChatroomContainer username={username} pageName="Home" />
    </div>
  );
}

export default App;
