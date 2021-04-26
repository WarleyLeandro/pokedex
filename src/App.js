import React, { useState } from "react";
import "./index.css";
import {
  ContainerCenter,
  RowStyled,
  Header,
  ButtonStyled,
  SearchBar,
} from "./styles";
import Card from "./components/Card";
import { usePokemons } from "./context/ContextData";

const Home = () => {
  const { pokemons, getAllPokemons } = usePokemons();
  const [searchPokemon, setSearchPokemon] = useState();

  //const searchPokemonUp = searchPokemon.toLowerCase();

  const foundPokemon = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchPokemon)
  );

  const allPokemons = foundPokemon.length ? foundPokemon : pokemons;

  return (
    <div className="App">
      <Header>
        <h1> POKEDEX </h1>
        <SearchBar
          type="text"
          value={searchPokemon}
          placeholder="Buscar pokemon"
          onChange={(ev) => setSearchPokemon(ev.target.value)}
        />

      </Header>
  
      <ContainerCenter>
        <RowStyled>
          {allPokemons.length &&
            allPokemons.map((pokemon, index) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  image={pokemon.sprites.other.dream_world.front_default}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                />
              );
            })}
        </RowStyled>
        <ButtonStyled onClick={() => getAllPokemons()}> Ver mais</ButtonStyled>
      </ContainerCenter>
    </div>
  );
};

export default Home;
