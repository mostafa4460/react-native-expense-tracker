import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ description, date, amount }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amount }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "SET": {
      const inverted = action.payload.reverse();
      return inverted;
    }

    case "ADD": {
      return [action.payload, ...state];
    }

    case "UPDATE": {
      const { id, data } = action.payload;

      return state.map((expense) => {
        if (expense.id === id) {
          return {
            ...expense,
            ...data,
          };
        } else {
          return expense;
        }
      });
    }

    case "DELETE": {
      return state.filter((expense) => expense.id !== action.payload);
    }

    default: {
      return state;
    }
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    setExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
