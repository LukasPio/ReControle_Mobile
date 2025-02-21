import { View, Text, StyleSheet, Alert} from "react-native" 
import Button from "../components/Button"
import { Length } from "../enums/length"
import Input from "../components/Input";
import { useState } from "react";

export default function Index() {
    const hello = () => {
        Alert.alert("Olá", "Seja bem-vindo ao ReControle");
    }

    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
            <Button text="Clique aqui chefia" size={Length.large} onPress={hello}/>
            <Input value={email} onChangeText={setEmail}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        gap: 20,
        backgroundColor: "#2b2e2a",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        width: "70%", 
        textAlign: "center",
        fontSize: 28,
        color: "#ffffff"
    }
})