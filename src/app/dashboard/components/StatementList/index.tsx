'use client';

import { LoadingOutlined } from '@ant-design/icons';
import { listTransactions } from '@usecases/transaction/listTransactions';
import { transactionApi } from '@infrastructure/api/transactionApi';
import useSWR from 'swr';

import Item from './components/Item';

const StatementList = () => {
  const { data: response } = useSWR('transaction', () => listTransactions(transactionApi));

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh-144px)] max-h-[902px] bg-white rounded-lg lg:w-[285px]">
      <p className="w-full text-left sm:text-center font-bold text-lg px-6 mt-6 lg:text-left">
        Extrato
      </p>

      {!response ? (
        <LoadingOutlined className="text-xl m-6" />
      ) : (
        <>
          {response.data.map((transaction, index) => (
            <Item
              key={index}
              transaction={transaction}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default StatementList;
