import { getPokemonBySearchTerm } from 'common/helpers/filters';
import { RootState } from 'common/store';
import PokemonCards from 'components/pokemonCards/pokemonCards';
import Search from 'components/search/search';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  let { pokemonList, searchTerm } = useSelector(
    (state: RootState) => state.pokemon
  );

  let filteredPokemon = useMemo(
    () => getPokemonBySearchTerm(pokemonList, searchTerm),
    [pokemonList, searchTerm]
  );

  return (
    <>
      <Search />
      <PokemonCards pokemonList={filteredPokemon || []} />
    </>
  );
}

export default Home;
