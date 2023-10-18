import Favourite from 'components/favourite/favourite';
import { IPokemon } from '../../common/types/pokemonTypes';
import css from './pokemonCard.module.scss';

export default PokemonCard;

function PokemonCard({ pokemon }: IPokemonCard) {
  return (
    <div className={css.container}>
      <div key={pokemon.id} className={css.pokemonCard}>
        <h1>{pokemon.name}</h1>
        <img
          height={200}
          alt={pokemon.name}
          src={pokemon.sprites.other.dream_world.front_default}
        />
        <Favourite isFavourite={pokemon?.favourite} id={pokemon.id} />
      </div>
    </div>
  );
}

// ----------------------
interface IPokemonCard {
  pokemon: IPokemon;
}
