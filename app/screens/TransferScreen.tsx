import TransferForm from "@/src/components/organisms/TransferForm";
import { makeTransfer } from "@/src/services/bankService";
import { TransferRequest } from "@/src/types/bank";
import { router } from "expo-router";
import { Alert } from "react-native";


export default function TransferScreen() {
  const handleSubmit = async (values: TransferRequest) => {
    try {
      const res = await makeTransfer(values);

      Alert.alert(
      "Éxito",
      "Transferencia realizada",
      [
        {
          text: "Aceptar",
          onPress: () => router.replace("/screens/HomeScreen"),
        },
      ]
    );
    } catch (error) {
      Alert.alert("Error", "No se pudo realizar la transferencia");
    }
  };

  return (
    <TransferForm onSubmit={handleSubmit}/>
  );
}