import {
  useContext, createContext, useMemo,
  useReducer, useEffect,
} from 'react';
import { dashboardApi } from '@infrastructure/api/dashboardApi';
import { transactionApi } from '@infrastructure/api/transactionApi';
import { toast } from 'react-toastify';
import ListTransactionUseCase from '@usecases/transaction/listTransactions';
import GetDashboardDataUseCase from '@usecases/dashboard/getDashboardData';
import useSWR from 'swr';

import {
  DashboardProviderProps,
  DashboardProviderType,
  State,
} from './types';
import reducer from './reducer';

const initialState:State = {
  balance: 0,
  transactions: [],
  loading: true,
  filteredTransactions: [],
  isFiltering: false,
};

const fetchDashboard = () => new GetDashboardDataUseCase(dashboardApi).execute();
const fetchTransactions = () => new ListTransactionUseCase(transactionApi).execute();

const Context = createContext({} as DashboardProviderType);
const useDashboardContext = ():DashboardProviderType => useContext(Context);

const DashboardProvider = ({ children }: DashboardProviderProps):JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data: dashboardData, error: dashboardError } = useSWR('dashboard', fetchDashboard);
  const { data: transactionsData, error: transactionsError } = useSWR('transactions', fetchTransactions);

  useEffect(() => {
    if (dashboardData) {
      dispatch({
        type: 'SET_BALANCE',
        balance: dashboardData.totalValue,
      });
    }

    if (transactionsData) {
      dispatch({
        type: 'SET_TRANSACTIONS',
        transactions: transactionsData.data,
      });
    }

    if (dashboardError || transactionsError) {
      toast.error('Erro ao carregar os dados, tente novamente mais tarde.');
    }
  }, [dashboardData, transactionsData, dashboardError, transactionsError, dispatch]);

  const value = useMemo(() => ({
    state,
    dispatch,
  }), [
    state,
  ]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export { DashboardProvider, useDashboardContext };
