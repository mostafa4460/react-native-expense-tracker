import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { COLORS } from "../../constants/styles";

const Input = ({ label, textInputProps, style }) => {
  const inputStyles = [styles.input];

  if (textInputProps?.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputProps} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: COLORS.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: COLORS.primary100,
    color: COLORS.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
