import { colors } from "@/assets/theme/colors";
import UIButton from "@/src/components/atoms/UIButton";
import BalanceCard from "@/src/components/molecules/BalanceCard";
import { useAuth } from "@/src/context/AuthContext";
import { getBalance } from "@/src/services/bankService";
import { BalanceResponse } from "@/src/types/bank";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();
  const [balanceData, setBalanceData] = useState<BalanceResponse>()

  useEffect(() => {
    balance();
  }, [])


  const balance = async () => {
    try {
      const data = await getBalance();

      setBalanceData(data)

    } catch (error) {
      console.log(error);
    }
  };

  if (!balanceData) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Cargando saldo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: "#fff", fontSize: 20 }}>
          Hola, {user?.name}
        </Text>
      </View>
      <BalanceCard
        accountBalance={balanceData.accountBalance}
        currency={balanceData.currency} />

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