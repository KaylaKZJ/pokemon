import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IComponentState } from 'common/types/componentState';
import { IPokemon } from 'common/types/pokemonTypes';

export interface PokemonState {
  pokemonList: IPokemon[] | null;
  getPokemon: IComponentState;
}

const initialState: PokemonState = {
  pokemonList: null,
  getPokemon: {
    loading: false,
    error: null,
    complete: null,
  },
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemon: (state) => {
      return state;
    },
    setGetPokemonStatus: (
      state,
      action: PayloadAction<Partial<PokemonState['getPokemon']>>
    ) => {
      state.getPokemon = { ...state.getPokemon, ...action.payload };
    },
    addPokemon: (state, action: PayloadAction<IPokemon[] | null>) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { addPokemon, getPokemon, setGetPokemonStatus } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
