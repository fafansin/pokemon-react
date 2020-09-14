import React, {Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
    render(){
        const pokeList = this.props.list;

        return (
            <div className="Pokedex">
                <h1>{this.props.isWinner ? 'Panalo!' : 'Talo!'}</h1>
                {pokeList.map((poke)=>{
                    return <Pokecard key={poke.name} data={poke}/>
                })}
                <div className="cleaner"></div>                
            </div>
        )
    }
}

export default Pokedex;