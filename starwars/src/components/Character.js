import React from 'react';

const Character = (props) => {
    const { starChar } = props;

    return (
        <div>
            <h2>Name: {starChar.name}</h2>
            <p>Birth Year:{starChar.birth_year}</p>
            <p>Hair Color: {starChar.hair_color}</p>
            <p>Species: {starChar.species}</p>
            <p>Vehices: {starChar.vehicles}</p>
        </div>
    )
}

export default Character