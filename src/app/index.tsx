import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Length } from "@/enums/length";
import Input from "@/components/Input";
import colors from "@/constants/colors";
import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Logo from "@/components/Logo";
import { registerUser } from "@/services/firebaseServices";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View style={styles.container}>
      <Logo size={Length.large} />
      <Input
        title="Nome"
        value={name}
        onChangeText={setName}
        size={Length.medium}
      />
      <Input
        title="Email"
        isEmail={true}
        value={email}
        onChangeText={setEmail}
        size={Length.medium}
      />
      <Input
        title="Senha"
        isPassword={true}
        value={password}
        onChangeText={setPassword}
        size={Length.medium}
      />
      <Input
        title="Confirme a senha"
        isPassword={true}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        size={Length.medium}
      />
      <CustomLink href="/login">Já possui uma conta? Clique aqui.</CustomLink>
      <Button
        text="Criar conta"
        onPress={() => registerUser({ name, email, password, passwordConfirm })}
        size={Length.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    gap: 12,
    paddingTop: 40,
  },
});
