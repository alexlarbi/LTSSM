import React from 'react';
import './App.css';

function App() {
  const overview = require('./overview.jpeg');

  return (
    <div className="App">
      <header className="App-header">
        <p>
         <img src ={overview} width="700" height="900"/>
        </p>
      </header>
    </div>
  );
}

export default App;
