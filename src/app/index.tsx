import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Length } from "@/enums/length";
import Input from "@/components/Input";
import colors from "@/constants/colors";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Input title="Nome" value={name} onChangeText={setName} size={Length.medium}/>
            <Input title="Email" isEmail={true} value={email} onChangeText={setEmail} size={Length.medium}/>
            <Input title="Senha" isPassword={true} value={password} onChangeText={setPassword} size={Length.medium}/>
            <Input title="Confirme a senha" isPassword={true} value={passwordConfirm} onChangeText={setPasswordConfirm} size={Length.medium}/>
            <TextLink href="/login">Já possui uma conta? Clique aqui.</TextLink>
            <Button text="Criar conta" size={Length.medium}/>
        </View>
    )
}

const styles = StyleSheet.create(
 {  
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        gap: 12
    }
 }
)