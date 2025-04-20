'use client';

import { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { map } from "rxjs/operators";
import { TRANSACTION_OPTIONS } from '@utils/transactionOptions';

import { useDashboardContext } from '../../../context';

const KindFilter = () => {
  const { state, dispatch } = useDashboardContext();

  useEffect(() => {
    const select = document.querySelector("#kindFilter");

    if (!select) return;

    const subscription = fromEvent(select, 'change').pipe(
      map((event) => (event.target as HTMLSelectElement).value),
    );

    subscription.subscribe((value) => {
      if (value) {
        const filteredList = state.transactions.filter(
          (transaction) => transaction.kind === value,
        );

        dispatch({
          type: 'SET_FILTERED_TRANSACTIONS',
          transactions: filteredList,
        })
      } else {
        dispatch({ type: 'CLEAR_FILTERS' });
      }
    });
  }, [dispatch, state.transactions]);

  return (
    <div className="w-full py-2 px-6 mt-1 mb-1">
      <p className="text-center text-sm font-semibold">Filtrar por tipo:</p>
      <select id="kindFilter" className="w-full">
        <option value="" data-default disabled selected>Selecione...</option>
        {TRANSACTION_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="w-full h-[1px] bg-primary-main" />
    </div>
  );
};

export default KindFilter;
