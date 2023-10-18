import { getFavouritePokemons } from 'common/helpers/filters';
import { RootState } from 'common/store';
import PokemonCards from 'components/pokemonCards/pokemonCards';
import Search from 'components/search/search';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function Favourites() {
  let { pokemonList } = useSelector((state: RootState) => state.pokemon);

  let filteredPokemon = useMemo(
    () => getFavouritePokemons(pokemonList),
    [pokemonList]
  );

  return (
    <>
      {filteredPokemon ? (
        <>
          <Search />
          <PokemonCards pokemonList={filteredPokemon || []} />
        </>
      ) : (
        <h1>You have not added any pokemon as favourites</h1>
      )}
    </>
  );
}

export default Favourites;
