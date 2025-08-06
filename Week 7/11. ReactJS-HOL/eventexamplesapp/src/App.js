import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Examples App</h1>
        <Counter />
        <Welcome />
        <SyntheticEvent />
        <CurrencyConvertor />
      </header>
    </div>
  );
}

export default App;