import { useState } from 'react';

function Home(){
    return{
        <div>
            <h1>Home 2</h1>
            <Contador />
            <h2>Home 3</h2>
        </div>
    } 
}


function Contador(){
    const [contador, setContador]=useState(1);
    
    function adcionarContador(){
        setContador(contador+1);
    }

    return {
        <div> 
            <div>{contador}</div>
            <button onClick={adcionarContador}>Adicionar</button>
        </div>
    }
}

export default Home;