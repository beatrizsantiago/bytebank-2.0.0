export type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

export type AddTransactionParams = {
  kind: KindType;
  value: number;
};

export type UpdateTransactionParams = {
  kind: KindType;
  value: number;
};
