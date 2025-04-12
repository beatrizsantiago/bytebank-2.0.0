import { useState } from 'react';
import { Input, Select, Button } from 'money-flow';
import { toast } from 'react-toastify';
import { addTransaction } from '@usecases/transaction/addTransaction';
import { transactionApi } from '@infrastructure/api/transactionApi';
import { KindType, TransactionOptionType } from '@generalTypes/transaction';
import { Errors } from '@generalTypes/global';
import { currencyToFloat, formatCurrency } from '@utils/currencyFormats';
import { TRANSACTION_OPTIONS } from '@utils/transactionOptions';
import Image from 'next/image';
import ErrorLabel from '@components/ErrorLabel';

import { useDashboardContext } from '../context';

const NewTransaction = ():JSX.Element => {
  const { state, dispatch } = useDashboardContext();

  const [selectedKind, setSelectedKind] = useState<TransactionOptionType | null>(null);
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState<Errors>(null)

  const onAddTransactionClick = async () => {
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

    if (absValue > state.balance && kind !== 'DEPOSIT') {
      toast.error('Saldo insuficiente para realizar essa transação!');
      return;
    };

    const formattedValue = absValue * (kind === 'DEPOSIT' ? 1 : -1);

    try {
      await addTransaction(
        {
          kind,
          value: formattedValue
        },
        transactionApi,
      );

      dispatch({
        type: 'ADD_TRANSACTION',
        transaction: {
          kind,
          value: formattedValue,
          _id: '',
          date: '',
        },
      });

      setSelectedKind(null);
      setValue('');
    } catch {
      toast.error('Erro ao realizar transação');
    };
  };

  return (
    <div className="p-8 bg-gray-medium rounded-lg mt-6 relative h-[630px] md:h-[478px]">
      <Image
        src="/images/pixels_2.svg"
        alt="Pixels"
        width={180}
        height={177}
        className="absolute top-0 xs:left-0 md:right-0 z-0"
      />

      <Image
        src="/images/pixels_2.svg"
        alt="Pixels"
        width={180}
        height={177}
        className="absolute bottom-0 right-0 md:left-0 rotate-180 z-0"
      />

      <Image
        src="/images/woman_with_credit_card.svg"
        alt="Mulher com cartão de crédito"
        width={327}
        height={230}
        className="absolute bottom-8 right-8 z-0"
      />

      <div className="w-full flex flex-col items-center z-10 relative md:items-start">
        <h2 className="font-bold text-lg text-primary-light mb-8">
          Nova transação
        </h2>

        <div className="min-w-[280px] md:min-w-[350px] mb-6">
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

        <label className="font-semibold text-primary-light mb-1">
          Valor
        </label>
        <div className="max-w-[250px] mb-6">
          <Input
            placeholder="0,00"
            value={value}
            onChange={(e) => setValue(formatCurrency(e.target.value))}
            error={!!errors?.value}
            className="w-full"
            type="number"
            required
          />
          {errors?.value && (
            <ErrorLabel error={errors.value} />
          )}
        </div>

        <Button
          text="Concluir transação"
          className="max-w-[250px]"
          onClick={onAddTransactionClick}
        />
      </div>
    </div>
  );
};

export default NewTransaction;
