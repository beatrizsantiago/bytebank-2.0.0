export const TRANSACTION_LABELS:{[key:string]:string} = {
  CURRENCY_EXCHANGE: 'Câmbio de Moeda',
  DOC_TED: 'DOC/TED',
  LEASING: 'Empréstimo e Financiamento',
  DEPOSIT: 'Depósito',
};

export const TRANSACTION_OPTIONS = Object.keys(TRANSACTION_LABELS)
  .map((key) => ({ label: TRANSACTION_LABELS[key], value: key }));
