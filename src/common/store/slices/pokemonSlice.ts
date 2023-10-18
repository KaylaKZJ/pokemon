import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getPokemonById } from 'common/helpers/filters';
import { IComponentState } from 'common/types/componentState';
import { IPokemon } from 'common/types/pokemonTypes';

export interface PokemonState {
  pokemonList: IPokemon[] | null;
  getPokemon: IComponentState;
  searchTerm: string;
}

const initialState: PokemonState = {
  pokemonList: null,
  getPokemon: {
    loading: false,
    error: null,
    complete: null,
  },
  searchTerm: '',
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
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFavourite: (state, action: PayloadAction<number>) => {
      if (state.pokemonList === null) return;
      let pokemon = getPokemonById(action.payload, state.pokemonList);
      if (pokemon) {
        pokemon.favourite = pokemon.favourite ? !pokemon.favourite : true;
      }
    },
  },
});

export const {
  addPokemon,
  getPokemon,
  setGetPokemonStatus,
  setSearchTerm,
  setFavourite,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
