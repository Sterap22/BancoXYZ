import { colors } from "@/assets/theme/colors";
import UIButton from "@/src/components/atoms/UIButton";
import UIInput from "@/src/components/atoms/UIInput";
import { TransferRequest } from "@/src/types/bank";
import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import AppHeader from "./AppHeader";

const schema = Yup.object().shape({
  value: Yup.number()
    .required("Monto requerido")
    .positive("Debe ser mayor a 0"),
  payeerDocument: Yup.string()
    .required("Cuenta requerida")
    .min(5, "Muy corta"),
});

export default function TransferForm({ onSubmit }: any) {


  return (
    
    <View style={styles.container}>
      <AppHeader title="Transferir" showBack />
      <Text style={styles.header}>Transferir dinero</Text>

      <View style={styles.card}>
        <Formik<TransferRequest>
          initialValues={{ 
            value: 0, 
            currency: "BRL",
            payeerDocument: "",
            transferDate: new Date().toISOString().split("T")[0]
        }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              {/* MONTO */}
              <Text style={styles.label}>Monto</Text>
              <UIInput
                placeholder="Ej: 100.00"
                keyboardType="numeric"
                value={values.value.toString()}
                onChangeText={(text: string) =>
                    setFieldValue("value", text ? Number(text) : 0)
                }
              />
              {touched.value && errors.value && (
                <Text style={styles.error}>{errors.value}</Text>
              )}

              {/* CUENTA */}
              <Text style={styles.label}>Cuenta destino</Text>
              <UIInput
                placeholder="Número de documento"
                value={values.payeerDocument}
                onChangeText={handleChange("payeerDocument")}
              />
              {touched.payeerDocument && errors.payeerDocument && (
                <Text style={styles.error}>
                  {errors.payeerDocument}
                </Text>
              )}

              {/* BOTÓN */}
              <View style={{ marginTop: 20 }}>
                <UIButton title="Enviar transferencia" onPress={handleSubmit as any} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 24
  },

  card: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 20,
  },

  label: {
    color: "#9CA3AF",
    marginBottom: 6,
    marginTop: 12,
    fontSize: 13,
  },

  error: {
    color: "#EF4444",
    marginTop: 4,
    fontSize: 12,
  },
});