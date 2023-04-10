import { View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label="Amount"
        textInputProps={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputProps={{
          placeholder: "MM-DD-YYYY",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputProps={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
