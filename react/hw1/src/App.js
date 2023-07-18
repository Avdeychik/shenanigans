import React from 'react';
import Simpson from "./components/Simpson/Simpson";
import Simpsons from "./components/Simpson/Simpsons/Simpsons";
import Characters from "./components/Characters/Characters";

const App = () => {

    return (
        <div>
           <Simpsons/>
            <Characters/>
        </div>
    );
};

export default App;