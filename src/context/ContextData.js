import React, { createContext, useContext, useState, useEffect } from "react";

const pokemonsContext = createContext();

export default function PokemonsProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    const newPokemons = [];

    for (let pokemon of data.results) {
      newPokemons.push(await fetchData(pokemon.name));
    }
    setPokemons((pokemons) => [...pokemons, ...newPokemons]);
  };

  const fetchData = async (pokemonName) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return response.json();
  };

  const getPokemon = (id) => {
    const found = pokemons.find((pokemon) => pokemon.id == id);
    return found;
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(pokemons);
  return (
    <pokemonsContext.Provider
      value={{
        pokemons,
        setPokemons,
        getAllPokemons,
        getPokemon,
      }}
    >
      {children}
    </pokemonsContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(pokemonsContext);
  const { pokemons, setPokemons, getAllPokemons, getPokemon } = context;
  return { pokemons, setPokemons, getAllPokemons, getPokemon };
}
