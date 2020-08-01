import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2 `
font-family: 'Teko', sans-serif;
font-size: 2.5rem;
color: #fff;
`;

const PStyle = styled.p `
font-family: 'Teko', sans-serif;
font-size: 2rem;;
color: #fff;
`;

const Character = (props) => {
    const { starChar } = props;

    return (
        <div>
            <TitleStyle>Name: {starChar.name}</TitleStyle>
            <PStyle>Birth Year:{starChar.birth_year}</PStyle>
            <PStyle>Hair Color: {starChar.hair_color}</PStyle>
            <PStyle>Species: {starChar.species}</PStyle>
            <PStyle>Vehices: {starChar.vehicles}</PStyle>
        </div>
    )
}

export default Character