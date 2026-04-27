import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function UIButton({ title, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#6366F1",
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
    shadowColor: "#6366F1",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 6,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});