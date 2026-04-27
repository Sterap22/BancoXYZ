import { useAuth } from "@/src/context/AuthContext";
import { LoginRequest } from "@/src/types/auth";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import LoginForm from "../../src/components/organisms/LoginForm";
import { loginService } from "../../src/services/authService";

export default function LoginScreen({ navigation }: any) {

  const { login } = useAuth();

  const handleLogin = async (values: LoginRequest) => {
    try {
      
      const data = await loginService(values);

      if (!data?.token) return;

      await login(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      colors={["#682df1", "#1e1e1f"]}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.wrapper}
      >
        <LoginForm onSubmit={handleLogin} />
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});