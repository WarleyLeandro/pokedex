import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./index.css";
import { ContainerCenter, ItenStyled, RowStyled, Header } from "./styles";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    console.log(data);
    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        console.log(data)
        const newPokemon = [...pokemons, data];
        setPokemons(newPokemon);
        pokemons.sort((a, b) => a.id - b.id);
      });
      console.log(pokemons);
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Header>
        <h1> POKEDEX </h1>
      </Header>

      <ContainerCenter>
        <RowStyled>
          {pokemons.length &&
            pokemons.map((pokemon, index) => {
              return (
                <ItenStyled>
                  <Card
                    key={index}
                    id={pokemon.id}
                    image={pokemon.sprites.other.dream_world.front_default}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                  />
                </ItenStyled>
              );
            })}
        </RowStyled>
      </ContainerCenter>
    </div>
  );
};

export default App;
