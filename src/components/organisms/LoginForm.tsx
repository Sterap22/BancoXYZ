import { LoginRequest } from "@/src/types/auth";
import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import UIButton from "../atoms/UIButton";
import InputField from "../molecules/InputField";

const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().min(4, "Mínimo 4 caracteres").required("Requerido"),
});

export default function LoginForm({ onSubmit }: any) {

  return (
    <Formik<LoginRequest>
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.card}>
          <Text style={styles.logo}>BancoXYZ</Text>
          <Text style={styles.subtitle}>Accede a tu cuenta</Text>

          <InputField
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")} />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <InputField
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <UIButton title="Ingresar" onPress={handleSubmit as any}  />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    margin: "auto"
  },
  subtitle: {
    color: "#9CA3AF",
    marginBottom: 20,
    margin: "auto"
  },
  error: {
    color: "#EF4444",
    marginBottom: 8,
    fontSize: 12,
  },
});