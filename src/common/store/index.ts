import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import pokemonSlice from './slices/pokemonSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
