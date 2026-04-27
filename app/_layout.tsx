import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, useAuth } from "../src/context/AuthContext";

function RootNavigation() {
  const { token, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!token) {
      router.replace("/");
    } else {
      router.replace("/screens/HomeScreen");
    }
  }, [token, loading]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function Layout() {
  return (
    <SafeAreaProvider style={{ flex: 1}}>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </SafeAreaProvider>
  );
}