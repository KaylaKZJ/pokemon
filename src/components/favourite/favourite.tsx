import { setFavourite } from 'common/store/slices/pokemonSlice';
import { useDispatch } from 'react-redux';
import css from './favourite.module.scss';

export default Favourite;

function Favourite({ id, isFavourite }: IFavourite) {
  const dispatch = useDispatch();
  return (
    <button
      className={`${css.button} ${isFavourite ? css.favourite : ''}`}
      onClick={() => dispatch(setFavourite(id))}
    >
      {isFavourite ? 'Unfavourite' : 'Favourite'}
    </button>
  );
}

// ----------------------
interface IFavourite {
  id: number;
  isFavourite: boolean | undefined;
}
