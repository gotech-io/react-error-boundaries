import React from 'react';
import IntervalCounter from './SomeComponent';
import ClassIntervalCounter from './SomeClassComponent';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Error Boundaries</h1>
      <IntervalCounter />
      <hr />
      <ClassIntervalCounter />
    </div>
  );
};

export default App;
