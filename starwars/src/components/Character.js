import React from 'react';

const Characters = (props) => {
    const { starChars } = props;
    console.log(starChars);

    return (
        <div>
            {
                starChars.map( (char, i) => <div key={i}>{char.name}</div>)
            }
        </div>
    )
}

export default Characters