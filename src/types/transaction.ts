export type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

export type AddTransactionParams = {
  kind: KindType;
  value: number;
};

export type UpdateTransactionParams = {
  kind: KindType;
  value: number;
};

export type TransactionType = {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
};

export type TransactionOptionType = {
  label: string;
  value: string;
};
