import React from 'react';
import Character from '../components/Character';

const Characters = (props) => {
    const { starChars } = props;
    //console.log(starChars);

    return (
        <div>
            {
            starChars.map( (char, i) => 
                <Character key={i} starChar={char} />)
            }
        </div>
    )
}

export default Characters;