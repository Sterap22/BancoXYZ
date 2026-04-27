import { colors } from "@/assets/theme/colors";
import UIButton from "@/src/components/atoms/UIButton";
import BalanceCard from "@/src/components/molecules/BalanceCard";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BalanceCard balance={1500} currency="BRL" />

      <UIButton title="Transferir" onPress={() => router.push("/screens/TransferScreen")} />
      <UIButton
        title="Historial"
        // variant="secondary"
        onPress={() => router.push("/screens/TransferListScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});