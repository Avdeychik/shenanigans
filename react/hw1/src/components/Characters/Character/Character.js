import React from 'react';

const Character = (props) => {
    const {character} = props;
    return (
        <div>
            <div>name: {character.name}</div>
            <div>status: {character.status}</div>
            <div>species: {character.species}</div>
            <div>gender: {character.gender}</div>
            <img src = {character.image} alt = {character.name}/>
        </div>
    );
};

export default Character;