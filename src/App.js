import React, {useState, useEffect} from 'react';
import {ContainerCenter} from './styles';

const App = () => {

  const [pokemons, setPokemons] = useState([]);


  useEffect(()=>{
      fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((respServer) => {
        if(respServer.ok) {
          return respServer.json();
        }
        console.log(respServer);
      })
      .then((respObj) => {
        console.log(respObj);
        setPokemons(respObj.pokemon_entries || []);
      })
  }, []);

  return (
    <div className="App">
      <h1> POKEDEX </h1>
      <ContainerCenter color={'red'}>
      
      <ul>
        { pokemons.length &&  pokemons.map((pokemon) => {
          return(
            <li key={pokemon.entry_number}>
                {pokemon.pokemon_species.name}
            </li>
          );
      })}
      </ul>
      </ContainerCenter>
      
    </div>
  );
}

export default App;
