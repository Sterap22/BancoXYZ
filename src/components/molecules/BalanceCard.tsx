import { colors } from "@/assets/theme/colors";
import { BalanceResponse } from "@/src/types/bank";
import { StyleSheet, Text, View } from "react-native";

export default function BalanceCard({ accountBalance , currency }: BalanceResponse) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Saldo disponible</Text>
      <Text style={styles.amount}>
        {currency} {accountBalance}
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