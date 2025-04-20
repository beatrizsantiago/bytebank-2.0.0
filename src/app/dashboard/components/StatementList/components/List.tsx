'use client';

import { LoadingOutlined } from '@ant-design/icons';

import { useDashboardContext } from '../../../context';
import Item from './Item';

const List = () => {
  const { state } = useDashboardContext();

  if (state.loading) {
    return <LoadingOutlined className="text-xl m-6" />
  }

  if (state.filteredTransactions.length === 0 && state.isFiltering) {
    return (
      <p className="w-full text-center font-bold text-sm px-6 mt-6">
        Nenhuma transação encontrada!
      </p>
    );
  }

  if (state.filteredTransactions.length > 0) {
    return (
      <>
        {state.filteredTransactions.map((transaction) => (
          <Item
            key={transaction._id}
            transaction={transaction}
          />
        ))}
      </>
    );
  }

  if (state.transactions.length === 0) {
    return (
      <p className="w-full text-center font-bold text-sm px-6 mt-6">
        Nenhuma transação encontrada!
      </p>
    );
  }

  return (
    <>
      {state.transactions.map((transaction) => (
        <Item
          key={transaction._id}
          transaction={transaction}
        />
      ))}
    </>
  );
};

export default List;
