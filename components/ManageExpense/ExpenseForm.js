import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [form, setForm] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const formChangeHandler = (name, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
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
            placeholder: "MM-DD-YYYY",
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
});
