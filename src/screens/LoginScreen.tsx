import { View } from "react-native";
import LoginForm from "../components/organisms/LoginForm";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <LoginForm />
    </View>
  );
}