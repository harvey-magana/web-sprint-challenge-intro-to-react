import React, {useEffect, useState } from 'react';
import Characters from './components/Characters';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const WrapperDiv = styled.div `
  margin: 5%;
`;

const Header = styled.h1 `
  color: #transparent;
  text-align: center;
  font-family: 'Teko', sans-serif;
  font-size: 10rem;
  text-shadow: -2px 0 green, 0 2px green, 2px 0 green, 0 -2px green;
`;

const App = () => {
  const [chars, setChars] = useState([]);
  let one = "https://swapi.dev/api/people/";
  let two = "https://swapi.dev/api/starships/";
  let three = "https://swapi.dev/api/vehicles/";


  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.all([requestOne, requestTwo, requestThree])
         .then(axios.spread( (...response) => {
          setChars([response[0].data.results, response[1].data.results, response[2].data.results])
         }))
         .catch( error => console.log(error))
     }, [])
    //console.log(chars);
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
