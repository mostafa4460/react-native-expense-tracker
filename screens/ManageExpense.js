import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { COLORS } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import {
  storeExpense,
  updateExpense as backendUpdateExpense,
  deleteExpense as backendDeleteExpense,
} from "../utils/http";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { deleteExpense, addExpense, updateExpense, expenses } =
    useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  const deleteExpenseHandler = async () => {
    setIsLoading(true);
    try {
      await backendDeleteExpense(editedExpenseId);
      deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (err) {
      setError("Could not delete this expense.");
      setIsLoading(false);
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsLoading(true);
    try {
      if (isEditing) {
        updateExpense(editedExpenseId, expenseData);
        await backendUpdateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      navigation.goBack();
    } catch (err) {
      setError("Could not add or update this expense.");
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, editedExpenseId]);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={COLORS.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: "center",
  },
});
