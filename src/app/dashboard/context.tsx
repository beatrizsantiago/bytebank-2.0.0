import {
  useContext, createContext, useMemo, useReducer,
  useEffect, useCallback, useRef,
} from 'react';
import { getDashboardData } from '@usecases/dashboard/getDashboardData';
import { dashboardApi } from '@infrastructure/api/dashboardApi';
import { listTransactions } from '@usecases/transaction/listTransactions';
import { transactionApi } from '@infrastructure/api/transactionApi';
import { toast } from 'react-toastify';
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
};

const Context = createContext({} as DashboardProviderType);
const useDashboardContext = ():DashboardProviderType => useContext(Context);

const DashboardProvider = ({ children }: DashboardProviderProps):JSX.Element => {
  const initialized = useRef(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = useCallback(async () => {
    try {
      const dashboardData = await getDashboardData(dashboardApi);
      dispatch({
        type: 'SET_BALANCE',
        balance: dashboardData.totalValue,
      });

      const transactions = await listTransactions(transactionApi);
      dispatch({
        type: 'SET_TRANSACTIONS',
        transactions: transactions.data,
      });
    } catch {
      toast.error('Erro ao carregar os dados, tente novamente mais tarde.');
    }
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getData();
    }
  }, [getData])

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
