import React, { useState } from 'react';
import NameEntry from './NameEntry';
import NameList from './NameList';
import Lottery from './Lottery';
import './App.css';

function App() {
  const [names, setNames] = useState([]);

  function handleAddName(name) {
    setNames([...names, name]);
  }

  return (
    <div className='lottery'>
      <h1>Lottery Webapp</h1>
      <NameEntry onSubmit={handleAddName} />
      <NameList names={names} />
      <Lottery names={names} />
      {/* <p>Designed by Moak</p> */}
    </div>
  );
}

export default App;
