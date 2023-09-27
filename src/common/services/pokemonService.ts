import { ALL_POKEMON, POKEMON } from 'common/constants/apiRoutes';
import { getData } from 'common/helpers/dataHelpers';
import api from '.';

export async function getPokemonList(url: string) {
  let data = await getData(url);
  let promises = data.results.map(async (element: any) => {
    return getData(`${element.url}`);
  });

  return Promise.all(promises);
}

export const pokemonService = {
  axios: api(),
  baseUrl: POKEMON,
  getPokemon() {
    return this.axios.get(`${this.baseUrl}/${ALL_POKEMON}`);
  },
  getPokemonByUrl(url: string) {
    return this.axios.get(url);
  },
};
