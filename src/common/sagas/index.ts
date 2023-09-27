import { all, fork } from 'redux-saga/effects';
import { watchGetPokemon } from './pokemonSaga';

function* rootSaga() {
  yield all([fork(watchGetPokemon)]);
}

export default rootSaga;
