import { colors } from "@/assets/theme/colors";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AppHeader from "./AppHeader";

export default function HistoryTransfer({ search, setSearch, filtered }: any) {



  return (
    <View style={styles.container}>
      <AppHeader title="Transferencias " showBack />
      <Text style={styles.title}>Historial</Text>

      {/* BUSCADOR */}
      <TextInput
        placeholder="Buscar por nombre"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      {
        (!filtered.length) ? (
          <View style={styles.container}>
            <Text style={styles.text}>No hay transferencias</Text>
          </View>
        ) : (<FlatList
          data={filtered}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.payeer.name}</Text>

              <Text style={styles.amount}>
                {item.currency} {item.value}
              </Text>

              <Text style={styles.meta}>
                Doc: {item.payeer.document}
              </Text>

              <Text style={styles.meta}>{item.date}</Text>
            </View>
          )}
        />)

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 24
  },

  text: {
    color: "#fff",
  },

  input: {
    backgroundColor: "#1E293B",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  amount: {
    color: "#22C55E",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },

  meta: {
    color: "#9CA3AF",
    fontSize: 12,
  },
});