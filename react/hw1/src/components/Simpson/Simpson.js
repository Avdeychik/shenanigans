import React from 'react';

const Simpson = (props) => {
    const {simpson} = props;
    return (
        <div>
            <div>name: {simpson.name}</div>
            <div>surname: {simpson.surname}</div>
            <img src={simpson.image} alt = {simpson.name}/>
        </div>
    );
};

export default Simpson;