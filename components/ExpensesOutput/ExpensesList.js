import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => (
  <FlatList
    data={expenses}
    renderItem={({ item }) => (
      <ExpenseItem
        description={item.description}
        date={item.date}
        amount={item.amount}
      />
    )}
    keyExtractor={(item) => item.id}
  />
);

export default ExpensesList;
