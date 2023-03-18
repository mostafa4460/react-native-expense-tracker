import { FlatList, Text } from "react-native";

const ExpensesList = ({ expenses }) => (
  <FlatList
    data={expenses}
    renderItem={({ item }) => <Text>{item.description}</Text>}
    keyExtractor={(item) => item.id}
  />
);

export default ExpensesList;
