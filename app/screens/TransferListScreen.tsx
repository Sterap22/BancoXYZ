import { colors } from "@/assets/theme/colors";
import HistoryTransfer from "@/src/components/organisms/HistoryTransfer";
import { getTransfers } from "@/src/services/bankService";
import { Transfer } from "@/src/types/bank";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default function TransferListScreen() {
  const [data, setData] = useState<Transfer[]>([]);
  const [filtered, setFiltered] = useState<Transfer[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTransfers();
  }, []);

  useEffect(() => {
    filterData();
  }, [search, data]);

  const loadTransfers = async () => {
    try {
      const res = await getTransfers();

      setData(res);
      setFiltered(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterData = () => {
    const result = data.filter((item) =>
      item.payeer.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cargando historial...</Text>
      </View>
    );
  }



  return (
    <HistoryTransfer setSearch={setSearch} search={search}  filtered={filtered}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  text: {
    color: "#fff",
  },
});