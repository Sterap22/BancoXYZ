import { colors } from "@/assets/theme/colors";
import { StyleSheet, Text, View } from "react-native";

export default function BalanceCard({ balance, currency }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Saldo disponible</Text>
      <Text style={styles.amount}>
        {currency} {balance.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 20
  },
  label: {
    color: "#E0E7FF",
  },
  amount: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
  },
});