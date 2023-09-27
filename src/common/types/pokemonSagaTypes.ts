import { INameUrl, IPokemon } from './pokemonTypes';

export interface IPokemonResponse {
  data: IPokemon;
}
export interface IResponse {
  data: { results: INameUrl[] };
}
