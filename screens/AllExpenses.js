import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered"
    />
  );
};

export default AllExpenses;
