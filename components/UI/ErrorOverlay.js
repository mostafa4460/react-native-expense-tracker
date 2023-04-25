import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../constants/styles";
import Button from "./Button";

const ErrorOverlay = ({ message }) => (
  <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>Ops, something went wrong...</Text>
    <Text style={styles.text}>{message}</Text>
  </View>
);

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
