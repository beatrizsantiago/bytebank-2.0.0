'use client';

import { useState } from 'react';
import { StatementItem } from 'money-flow';
import { toast } from 'react-toastify';
import { removeTransaction } from '@usecases/transaction/removeTransaction';
import { transactionApi } from '@infrastructure/api/transactionApi';
import { TransactionType } from '@generalTypes/transaction';

import { useDashboardContext } from '../../../context';
import EditModal from './EditModal';

type Props = {
  transaction: TransactionType;
};

const Item = ({ transaction }:Props) => {
  const { dispatch } = useDashboardContext();

  const [showEditModal, setShowEditModal] = useState(false);

  const onDeleteClick = async () => {
    try {
      await removeTransaction(transaction._id, transactionApi);
      dispatch({
        type: 'DELETE_TRANSACTION',
        id: transaction._id,
      });
    } catch {
      toast.error('Erro ao deletar a transação');
    };
  };

  return (
    <div className="w-full p-6 sm:max-w-[500px] lg:w-full">
      <StatementItem
        date={transaction.date}
        value={transaction.value}
        kind={transaction.kind}
        onDeleteClick={onDeleteClick}
        onEditClick={() => setShowEditModal(true)}
      />

      {showEditModal && (
        <EditModal
          onClose={() => setShowEditModal(false)}
          transaction={transaction}
        />
      )}
    </div>
  );
};

export default Item;
