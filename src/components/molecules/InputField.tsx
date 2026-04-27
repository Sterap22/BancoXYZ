import { StyleSheet, Text, View } from "react-native";
import UIInput from "../atoms/UIInput";

export default function InputField({ label, ...props }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <UIInput {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 14 },
  label: {
    color: "#9CA3AF",
    marginBottom: 6,
    fontSize: 13,
  },
});