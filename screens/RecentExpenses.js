import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const recentExpenses = expenses.filter(expense => {
    const today = new Date();
    const todayMinus7 = getDateMinusDays(today, 7);
    return expense.date > todayMinus7;
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
};

export default RecentExpenses;