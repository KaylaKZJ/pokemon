import { pokemonService } from 'common/services/pokemonService';
import {
    addPokemon,
    getPokemon,
    setGetPokemonStatus
} from 'common/store/slices/pokemonSlice';
import { IPokemonResponse, IResponse } from 'common/types/pokemonSagaTypes';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPokemon() {
  try {
    yield put(setGetPokemonStatus({ loading: true, error: null }));
    let res: IResponse = yield pokemonService.getPokemon();
    let promises = res.data.results.map(async (element: any) => {
      return pokemonService.getPokemonByUrl(element.url);
    });

    let pokemonList: IPokemonResponse[] = yield Promise.all(promises);
    let filteredPokemonList = pokemonList.map((poke) => poke.data);
    yield put(addPokemon(filteredPokemonList));
  } catch (e: any) {
    yield put(setGetPokemonStatus({ error: e }));
  } finally {
    yield put(setGetPokemonStatus({ loading: false, complete: true }));
  }
}

export function* watchGetPokemon() {
  yield takeLatest(getPokemon.toString(), fetchPokemon);
}
