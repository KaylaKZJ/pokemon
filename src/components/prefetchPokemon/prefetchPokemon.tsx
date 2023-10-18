import { useComponentState } from 'common/hooks/useComponentState';
import { RootState } from 'common/store';
import { getPokemon } from 'common/store/slices/pokemonSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default PrefetchPokemon;

function PrefetchPokemon({ children }: IPrefetchPokemon) {
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
    <>
      {componentState.content && children}
      {componentState.loading && 'loading'}
      {componentState.error && error?.message}
    </>
  );
}

interface IPrefetchPokemon {
  children: React.ReactNode;
}
