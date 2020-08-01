import React from 'react';

const Character = (props) => {
    const { starChar } = props;
    console.log(starChar);

    return (
        <div>
            <h2>{starChar.name}</h2>
            <p>{starChar.birth_year}</p>
            <p>{starChar.hair_color}</p>
        </div>
    )
}

export default Character