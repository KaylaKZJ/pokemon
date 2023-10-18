import { IPokemon } from 'common/types/pokemonTypes';

export const getPokemonById = (id: number, pokemonList: IPokemon[]) =>
  pokemonList.find((pokemon) => pokemon.id === id);

export const getFavouritePokemons = (pokemonList: IPokemon[] | null) => {
  if (!pokemonList) return null;
  let filtered = pokemonList.filter((pokemon) => pokemon.favourite);
  return filtered.length > 0 ? filtered : null;
};

export const getPokemonBySearchTerm = (
  pokemonList: IPokemon[] | null,
  searchTerm: string
) => {
  if (!pokemonList) return null;
  let filtered = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchTerm)
  );
  return filtered.length > 0 ? filtered : null;
};
