import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Length } from "@/enums/length";
import Input from "@/components/Input";
import colors from "@/constants/colors";
import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Logo from "@/components/Logo";
import { login } from "@/services/firebaseServices";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View style={styles.container}>
            <Logo size={Length.large}/>
            <Input title="Email" isEmail={true} value={email} onChangeText={setEmail} size={Length.medium}/>
            <Input title="Senha" isPassword={true} value={password} onChangeText={setPassword} size={Length.medium}/>
            <CustomLink href="/">Ainda não possui uma conta? Clique aqui.</CustomLink>
            <Button text="Fazer login" onPress={() => login({email, password})} size={Length.medium}/>
        </View>
    )
}

const styles = StyleSheet.create(
 {  
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background,
        gap: 12,
        paddingTop: 40 
    }
 }
)