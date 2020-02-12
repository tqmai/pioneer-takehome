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

import React from 'react';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
