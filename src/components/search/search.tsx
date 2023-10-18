import { RootState } from 'common/store';
import { setSearchTerm } from 'common/store/slices/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './search.module.scss';

export default Search;

function Search() {
  const { searchTerm } = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  return (
    <input
      className={css.search}
      type='text'
      placeholder='Search Pokemon'
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
}
