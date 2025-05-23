import { State, ActionType } from './types';

const reducer = (state: State, action: ActionType):State => {
  switch (action.type) {
    case 'SET_BALANCE':
      return {
        ...state,
        balance: action.balance,
      };
      
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.transactions,
        loading: false,
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.transaction, ...state.transactions],
        balance: state.balance + action.transaction.value,
        isFiltering: false,
      };

    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction._id === action.transaction._id
            ? action.transaction
            : transaction
        ),
        balance: state.transactions.reduce((acc, transaction) => {
          if (transaction._id === action.transaction._id) {
            return acc + action.transaction.value;
          }
          return acc + transaction.value;
        }
        , 0),
        isFiltering: false,
      };

    case 'DELETE_TRANSACTION':
      const transactionToDelete = state.transactions.find((transaction) => transaction._id === action.id);
      if (!transactionToDelete) {
        return state;
      }

      return {
        ...state,
        transactions: [
          ...state.transactions.filter((transaction) => transaction._id !== action.id),
        ],
        balance: state.balance - transactionToDelete.value,
        isFiltering: false,
      };

    case 'SET_FILTERED_TRANSACTIONS':
      return {
        ...state,
        filteredTransactions: action.transactions,
        isFiltering: true,
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filteredTransactions: [],
        isFiltering: false,
      };

    default:
      throw new Error('Unhandled action');
  }
};

export default reducer;
