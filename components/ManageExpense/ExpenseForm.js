import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [form, setForm] = useState({
    amount: defaultValues?.amount.toString() || "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues?.description || "",
  });

  const formChangeHandler = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +form.amount,
      date: new Date(form.date),
      description: form.description,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>

      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputProps={{
            keyboardType: "decimal-pad",
            onChangeText: formChangeHandler.bind(this, "amount"),
            value: form.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputProps={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: formChangeHandler.bind(this, "date"),
            value: form.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputProps={{
          multiline: true,
          onChangeText: formChangeHandler.bind(this, "description"),
          value: form.description,
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
