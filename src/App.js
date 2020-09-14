import React from 'react';
import Pokedex from './Pokedex';
import './App.css';
import Pokemons from './Pokemons';

function App() {
    let list1 = [];
    let totalA = 0;
    let totalB = 0;

    for (let index = 0; index < 4; index++) {
        let item = Pokemons.getOne();
        list1.push(item);
        totalA += item.base_experience;
    }
    
    let list2 = Pokemons.list;
    list2.forEach(element => {
        totalB += element.base_experience;
    });

    console.log("1 " + totalA);
    console.log("2 " + totalB);
    
    
    return (
            <div>
                <Pokedex key="Laviel" isWinner={totalB > totalA} list={list2}/>
                <Pokedex key="Rivka" isWinner={totalA > totalB} list={list1}/>
            </div>
        );
}

export default App;
