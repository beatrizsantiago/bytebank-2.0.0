import { TransactionType } from '@generalTypes/transaction';

export type State = {
  balance: number,
  transactions: TransactionType[],
  loading: boolean,
};

export type ActionType = { type: 'SET_BALANCE', balance: number }
| { type: 'SET_TRANSACTIONS', transactions: TransactionType[] }
| { type: 'ADD_TRANSACTION', transaction: TransactionType }
| { type: 'UPDATE_TRANSACTION', transaction: TransactionType }
| { type: 'DELETE_TRANSACTION', id: string };

export type DashboardProviderType = {
  state: State,
  dispatch: React.Dispatch<ActionType>,
};

export type DashboardProviderProps = {
  children: React.ReactNode,
};
