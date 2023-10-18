import { useComponentState } from 'common/hooks/useComponentState';
import { RootState } from 'common/store';
import { getPokemon } from 'common/store/slices/pokemonSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from '../pokemonCard/pokemonCard';
import css from './pokemonCards.module.scss';
import { IPokemon } from 'common/types/pokemonTypes';

export default PokemonCards;

function PokemonCards({ pokemonList }: IPokemonCards) {
  const {
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
    <>
      <div className={css.container}>
        {componentState.content &&
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        {componentState.loading && 'loading'}
        {componentState.error && error?.message}
      </div>
    </>
  );
}

interface IPokemonCards {
  pokemonList: IPokemon[];
}
