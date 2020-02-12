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

function App() {
  // variable to keep track of username
  // const [username, setUsername] = useState('friend');

  return (
    <div>
      {/* <Welcome setUsername={setUsername} /> */}
      <Welcome />
    </div>
  );
}

export default App;
