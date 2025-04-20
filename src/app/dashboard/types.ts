import Transaction from '@domain/entities/Transaction';

export type State = {
  balance: number,
  transactions: Transaction[],
  loading: boolean,
  filteredTransactions: Transaction[],
  isFiltering: boolean,
};

export type ActionType = { type: 'SET_BALANCE', balance: number }
| { type: 'SET_TRANSACTIONS', transactions: Transaction[] }
| { type: 'ADD_TRANSACTION', transaction: Transaction }
| { type: 'UPDATE_TRANSACTION', transaction: Transaction }
| { type: 'DELETE_TRANSACTION', id: string }
| { type: 'SET_FILTERED_TRANSACTIONS', transactions: Transaction[] }
| { type: 'CLEAR_FILTERS'};

export type DashboardProviderType = {
  state: State,
  dispatch: React.Dispatch<ActionType>,
};

export type DashboardProviderProps = {
  children: React.ReactNode,
};
