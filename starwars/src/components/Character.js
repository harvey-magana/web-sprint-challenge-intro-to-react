import React from 'react';

const Characters = (props) => {
    const { starChars } = props;
    console.log(starChars);

    return (
        <div>
            {
                starChars.map( (char, i) => 
                    <div key={i}>
                        <p>{char.name}</p>
                        <p>{char.birth_year}</p>
                        <p>{char.hair_color}</p>
                        <p>{char.height}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Characters