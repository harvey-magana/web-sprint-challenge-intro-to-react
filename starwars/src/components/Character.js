import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2 `
    font-family: 'Teko', sans-serif;
    font-size: 3.5rem;
    color: #fff;
`;

const HeightMass = styled.p `
    font-family: 'Teko', sans-serif;
    font-size: 2.5rem;;
    color: #030846;
    background-color: #736969;
    width: 10rem;
    text-align: center;
    border-radius: 40px 130px 40px 130px;
    padding: 10px;
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
    display: grid;
    grid-template-columns: 100px 100px;
    grid-gap: 10px;
`;

const Character = (props) => {
    const { starChar } = props;
    console.log(starChar)

    return (
        <div>
            <Card>
                <CardContainer>
                    <TitleStyle>{starChar.name}</TitleStyle>
                    <HeightMass>{starChar.birth_year}</HeightMass>
                    <TitleStyle>{starChar.starships ? starChar.starships[0] : <p>None Found</p> }</TitleStyle>
                    <TitleStyle>{starChar.vehicles ? starChar.vehicles[0] : <p>None Found</p> }</TitleStyle>
                </CardContainer>
            </Card>
        </div>
    )
}

export default Character;