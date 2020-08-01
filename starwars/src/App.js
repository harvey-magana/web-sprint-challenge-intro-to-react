import React, {useEffect, useState } from 'react';
import Characters from './components/Characters';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const WrapperDiv = styled.div `
  margin: 5%;
`;

const Header = styled.h1 `
  color: #fff;
  text-align: center;
  font-family: 'Teko', sans-serif;
  font-size: 10rem;
`;

const App = () => {
  const [chars, setChars] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res)
        setChars(res.data.results)
      })
      .catch( error => console.log(error))
  }, [])

  return (
    <WrapperDiv>
      <Header>Characters</Header>
        {
          chars.map( (char, i) => 
              <Characters key={i} starChars={char}/>)
        }
    </WrapperDiv>
  );
}

export default App;
