import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedExpenseId]);

  return <Text>ManageExpense Screen</Text>;
};

export default ManageExpense;
