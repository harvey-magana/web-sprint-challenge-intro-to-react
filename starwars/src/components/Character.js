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

const HeightMass = styled.p `
    font-family: 'Teko', sans-serif;
    font-size: 2rem;;
    color: #fff;
    background-color: #736969;
    width: 8rem;
    text-align: center;
    border-radius: 2rem;
    padding: 5px;
`;

const Card = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border: 1px solid green;
    margin: 1.5rem;
`;

const CardContainer = styled.div `
    padding: 2px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Character = (props) => {
    const { starChar } = props;

    return (
        <div>
            <Card>
                <CardContainer>
                    <TitleStyle>{starChar.name}</TitleStyle>
                    <HeightMass>{starChar.birth_year}</HeightMass>
                </CardContainer>
            </Card>
        </div>
    )
}

export default Character