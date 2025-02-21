import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Length } from "@/enums/length";
import Input from "@/components/Input";
import colors from "@/constants/colors";
import { Link } from "expo-router";

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Link href={"/tabs/login"}>LOGIN</Link>
            <Input title="Email" value={email} placeholder="exemplo@gmail.com" onChangeText={setEmail} size={Length.large}/>
            <Input title="Password" value={password} onChangeText={setPassword} size={Length.large}/>
        </View>
    )
}

const styles = StyleSheet.create(
 {  
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background
    }
 }
)