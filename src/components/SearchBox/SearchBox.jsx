import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { selectLoading } from '../../redux/contactsSlice';
import FormGroup from '../FormGroup/FormGroup';
import styles from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);

  const handleChangeFilter = query => {
    dispatch(changeFilter(query));
  };

  return (
    <div className={styles.searchBox}>
      <FormGroup
        id="filter"
        label="Find contacts by name"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
        isControlled
        disabled={loading}
      />
    </div>
  );
}

export default SearchBox;
