import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  const inFlatMode = mode === "flat";

  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, inFlatMode && styles.flat]}>
          <Text style={[styles.buttonText, inFlatMode && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: COLORS.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: COLORS.primary200,
    borderRadius: 4,
  },
});
