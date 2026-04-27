import { StyleSheet, TextInput } from "react-native";

export default function UIInput(props: any) {
  return (
    <TextInput
      placeholderTextColor="#6B7280"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1F2937",
    color: "#fff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#374151",
  },
});