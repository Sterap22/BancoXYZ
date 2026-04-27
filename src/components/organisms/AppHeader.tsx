import { useAuth } from "@/src/context/AuthContext";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  showBack?: boolean;
}

export default function AppHeader({ title, showBack = false }: Props) {
  const { logout } = useAuth();
//To do: cambiar molecular
  return (
    <View style={styles.container}>
      {/* BACK */}
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.button}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 30 }} />
      )}

      {/* TITLE */}
      <Text style={styles.title}>{title}</Text>

      {/* LOGOUT */}
      <TouchableOpacity onPress={logout}>
        <Text style={styles.button}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#1E293B",
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    color: "#fff",
    fontSize: 20,
  },
});