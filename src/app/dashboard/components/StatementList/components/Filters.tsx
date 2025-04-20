'use client';

import { Button } from 'money-flow';

import { useDashboardContext } from '../../../context';
import SearchValue from './SearchValue';
import KindFilter from './KindFilter';

const Filters = () => {
  const { state, dispatch } = useDashboardContext();

  const clearInput = () => {
    const input = document.querySelector('#search') as HTMLInputElement;
    if (!input) return;
    input.value = '';
    input.dispatchEvent(new Event('input'));
  }

  const clearSelect = () => {
    const select = document.querySelector('#kindFilter') as HTMLSelectElement;
    if (!select) return;
    select.value = '';
    select.dispatchEvent(new Event('change'));
  }

  const onClearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
    clearInput();
    clearSelect();
  };

  return (
    <>
      <SearchValue />
      <KindFilter />

      {state.isFiltering && (
        <Button
          text="Limpar filtros"
          style={{ height: 30 }}
          onClick={onClearFilters}
          outlined
        />
      )}
    </>
  );
};

export default Filters;
