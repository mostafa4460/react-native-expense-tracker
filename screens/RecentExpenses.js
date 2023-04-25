import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const todayMinus7 = getDateMinusDays(today, 7);
    return expense.date >= todayMinus7 && expense.date <= today;
  });

  useEffect(() => {
    const getAllExpenses = async () => {
      const allExpenses = await fetchExpenses();
      setIsLoading(false);
      setExpenses(allExpenses);
    };
    getAllExpenses();
  }, []);

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No recent expenses registered"
    />
  );
};

export default RecentExpenses;
