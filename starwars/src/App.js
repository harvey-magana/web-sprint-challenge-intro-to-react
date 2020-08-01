import React, {useEffect, useState } from 'react';
import Characters from './components/Character';
import axios from 'axios';
import './App.css';

const App = () => {
  const [chars, setChars] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res)
        setChars(res.data.results)
      })
      .catch( error => console.log(error))
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        chars.map( (char, i) => <Characters key={i} starChars={char} />)
      }
    </div>
  );
}

export default App;
