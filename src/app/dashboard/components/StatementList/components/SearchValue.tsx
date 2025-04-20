'use client';

import { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { SearchOutlined } from '@ant-design/icons';

import { useDashboardContext } from '../../../context';

const SearchValue = () => {
  const { state, dispatch } = useDashboardContext();
  
  useEffect(() => {
    const input = document.querySelector('#search') as HTMLInputElement;

    if (!input) return;

    const observable = fromEvent(input, 'input').pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
    );

    const subscription = observable.subscribe((value) => {
      if (value) {
        const filteredList = state.transactions.filter(
          (transaction) => transaction.value.toString().includes(value)
        );

        dispatch({
          type: 'SET_FILTERED_TRANSACTIONS',
          transactions: filteredList,
        })
      } else {
        dispatch({ type: 'CLEAR_FILTERS' });
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch, state.transactions]);

  return (
    <div className="w-full py-2 px-6 mt-1">
      <div className="w-full h-[38px] pl-3 py-2 flex items-center justify-between border border-primary-main rounded-md text-primary-main">
        <input
          className="w-[85%] outline-none ring-0 text-sm"
          placeholder="Pesquisar valor"
          type="number"
          id="search"
        />  
        <SearchOutlined className="mx-2" />
      </div>
    </div>
  );
};

export default SearchValue;
