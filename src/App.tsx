import React from 'react';
import './App.css';
import Search from './Search';

const App = function () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search for an artist!
        </p>
        <Search />
      </header>
    </div>
  );
}

export default App;
