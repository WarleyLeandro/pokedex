import React from "react";
import "./index.css";
import { ContainerCenter, RowStyled, Header, ButtonStyled } from "./styles";
import Card from "./components/Card";
import { usePokemons } from './context/ContextData';

const Home = () => {
  const {pokemons, getAllPokemons} = usePokemons();
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
