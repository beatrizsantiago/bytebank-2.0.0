'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { Input, Select, Button } from 'money-flow';
import { transactionApi } from '@infrastructure/api/transactionApi';
import { KindType, TransactionOptionType } from '@generalTypes/transaction';
import { currencyToFloat } from '@utils/currencyFormats';
import { Errors } from '@generalTypes/global';
import { TRANSACTION_LABELS, TRANSACTION_OPTIONS } from '@utils/transactionOptions';
import UpdateTransactionUseCase from '@usecases/transaction/updateTransaction';
import Transaction from '@domain/entities/Transaction';
import dynamic from 'next/dynamic';

import { useDashboardContext } from '../../../context';

const Modal = dynamic(() => import('@components/Modal'));
const ErrorLabel = dynamic(() => import('@components/ErrorLabel'));

type Props = {
  onClose: () => void;
  transaction: Transaction;
};

const EditTransactionModal = ({ onClose, transaction }:Props) => {
  const { dispatch } = useDashboardContext();

  const [selectedKind, setSelectedKind] = useState<TransactionOptionType | null>({
    label: TRANSACTION_LABELS[transaction.kind],
    value: transaction.kind,
  })
  const [value, setValue] = useState(transaction.value.toString());
  const [errors, setErrors] = useState<Errors>(null)

  const onEditClick = async () => {
    if (!selectedKind) {
      setErrors({ kind: 'Selecione o tipo de transação' });
      return;
    };
    
    const kind = selectedKind.value as KindType;
    const absValue = Math.abs(currencyToFloat(value));

    if (absValue === 0) {
      setErrors({ value: 'O valor da transação deve ser maior que zero' });
      return;
    };

    setErrors(null);

    try {
      const updateTransactionUseCase = new UpdateTransactionUseCase(transactionApi);

      const response = await updateTransactionUseCase.execute({
        id: transaction._id,
        kind,
        value: absValue,
      });

      console.log({ response });
      

      dispatch({
        type: 'UPDATE_TRANSACTION',
        transaction: response,
      });

      setSelectedKind(null);
      setValue('');

      onClose();
    } catch (error) {
      toast.error((error as Error).message);
    };
  };

  return (
    <Modal isVisible onClose={onClose}>
      <div className="w-full flex flex-col items-center z-10 relative">
        <h2 className="font-bold text-center text-lg text-primary-main mb-8">
          Editar transação
        </h2>

        <div className="w-full">
          <div className="mb-6">
            <Select
              placeholder="Selecione o tipo de transação"
              options={TRANSACTION_OPTIONS}
              selected={selectedKind}
              onChange={(opt) => setSelectedKind(opt)}
            />
            {errors?.kind && (
              <ErrorLabel error={errors.kind} />
            )}
          </div>

          <label className="font-semibold text-primary-main mb-1 text-sm">
            Valor
          </label>
          <div className="mb-8 max-w-[300px]">
            <Input
              placeholder="0,00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              error={!!errors?.value}
              className="w-full"
              type="number"
            />
            {errors?.value && (
              <ErrorLabel error={errors.value} />
            )}
          </div>
        </div>

        <Button
          text="Atualizar"
          className="max-w-[250px]"
          onClick={onEditClick}
        />
      </div>
    </Modal>
  );
};

export default EditTransactionModal;
