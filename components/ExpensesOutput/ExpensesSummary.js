import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  period: {
    fontSize: 12,
    color: COLORS.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary500,
  },
});
