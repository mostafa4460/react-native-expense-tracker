import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const todayMinus7 = getDateMinusDays(today, 7);
    return expense.date >= todayMinus7 && expense.date <= today;
  });

  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        const allExpenses = await fetchExpenses();
        setExpenses(allExpenses);
      } catch (err) {
        setError("Could not fetch your expenses.");
      }
      setIsLoading(false);
    };
    getAllExpenses();
  }, []);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No recent expenses registered"
    />
  );
};

export default RecentExpenses;
