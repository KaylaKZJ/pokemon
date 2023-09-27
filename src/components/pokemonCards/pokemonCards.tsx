import { useComponentState } from 'common/hooks/useComponentState';
import { RootState } from 'common/store';
import { getPokemon } from 'common/store/slices/pokemonSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from '../pokemonCard/pokemonCard';

export default PokemonCards;

function PokemonCards() {
  const {
    pokemonList,
    getPokemon: { complete, loading, error },
  } = useSelector((state: RootState) => state.pokemon);
  const [componentState] = useComponentState(complete, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemonList) {
      dispatch(getPokemon());
    }
  }, [pokemonList, dispatch]);

  return (
    <div>
      {componentState.content &&
        pokemonList?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      {componentState.loading && 'loading'}
      {componentState.error && error?.message}
    </div>
  );
}
