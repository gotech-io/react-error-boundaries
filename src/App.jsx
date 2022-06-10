import React from 'react';
import SomeComponent from './SomeComponent';
import SomeClassComponent from './SomeClassComponent';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Error Boundaries</h1>
      <SomeComponent />
      <hr />
      <SomeClassComponent />
    </div>
  );
};

export default App;
