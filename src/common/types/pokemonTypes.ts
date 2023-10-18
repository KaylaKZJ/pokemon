import { IPokemonSprite } from './pokemonSprite';

export interface IPokemon {
  abilities: IAbilities[];
  base_experience: number;
  forms: INameUrl[];
  game_indices: IGameIndeces[];
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: IPastType[];
  species: INameUrl;
  sprites: IPokemonSprite;
  stats: IStat[];
  types: IType[];
  weight: number;
  favourite?: boolean;
}

export interface INameUrl {
  name: string;
  url: string;
}
export interface IAbilities {
  ability: INameUrl;
  is_hidden: boolean;
  slot: number;
}

export interface IGameIndeces {
  game_index: number;
  version: INameUrl;
}

export interface IVersionDetail {
  rarity: number;
  version: INameUrl;
}
export interface IHeldItem {
  item: INameUrl;
  version_details: IVersionDetail[];
}
export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: INameUrl;
  version_group: INameUrl;
}
export interface IMove {
  move: INameUrl;
  version_group_details: IVersionGroupDetail[];
}

export interface IPastType {
  generation: {
    name: string;
    url: string;
  };
  types: IType[];
}

export interface IType {
  slot: number;
  type: INameUrl;
}
export interface IStat {
  base_stat: number;
  effort: number;
  stat: INameUrl;
}
