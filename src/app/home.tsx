import { View, Text, StyleSheet, Alert} from "react-native" 
import Button from "@/components/Button"
import { Length } from "@/enums/length"

export default function Home() {
    const hello = () => {
        Alert.alert("Olá", "Seja bem-vindo ao ReControle");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
            <Button text="Clique aqui chefia" size={Length.large} onPress={hello}/>
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