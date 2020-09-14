import React, {Component} from 'react';
import './Pokecard.css'; 

class Pokecard extends Component{
    render(){
        const data = this.props.data;
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(data.id).toLocaleString('en-US', {minimumIntegerDigits:3, useGroupin:false})}.png`;
        return (
            <div className="Pokecard">
                <p><strong>{data.name}</strong></p>
                <img src={image} alt="bakla ka pala eh"/>
                <p>Type: {data.type}</p>
                <p>EXP: {data.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;