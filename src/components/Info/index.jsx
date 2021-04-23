/* eslint-disable no-const-assign */
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  InfoStyled,
  ImgCard,
  InfoPokemon,
  InfoContainer,
  ButtonStyled,
} from "../../styles";
import { usePokemons } from "../../context/ContextData";

const Info = () => {
  const { getPokemon } = usePokemons();
  let { id } = useParams();
  const pokemon = getPokemon(id);
  console.log(pokemon)
  return (
    pokemon ? (
    <InfoContainer>
      <InfoStyled type={pokemon.types[0].type.name}>
        <ImgCard>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={"informações"}
          />
        </ImgCard>
        <InfoPokemon>
          <strong>Nome: {pokemon.name}</strong>
          <span>Peso: {pokemon.weight}</span>
        </InfoPokemon>
      </InfoStyled>

      <Link to="/">
        <ButtonStyled>Voltar</ButtonStyled>
      </Link>
    </InfoContainer>
    ) : (
      <div> erro </div>
    )
  );
};

export default Info;
