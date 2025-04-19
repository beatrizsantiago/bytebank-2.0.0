import Transaction from '@domain/entities/Transaction';

export type KindType = 'DEPOSIT' | 'CURRENCY_EXCHANGE' | 'DOC_TED' | 'LEASING';

export type TransactionOptionType = {
  label: string;
  value: string;
};

export type TransactionList = {
  data: Transaction[];
  totalPages: number;
  currentPage: number;
};
