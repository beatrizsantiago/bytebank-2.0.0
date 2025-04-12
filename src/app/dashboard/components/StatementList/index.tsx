'use client';

import { LoadingOutlined } from '@ant-design/icons';

import { useDashboardContext } from '../../context';
import Item from './components/Item';

const StatementList = () => {
  const { state } = useDashboardContext();

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-144px)] max-h-[902px] bg-white rounded-lg lg:w-[285px]">
      <p className="w-full text-left sm:text-center font-bold text-lg px-6 mt-6 lg:text-left">
        Extrato
      </p>

      {state.loading ? (
        <LoadingOutlined className="text-xl m-6" />
      ) : (
        <>
          {state.transactions.map((transaction) => (
            <Item
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default StatementList;
