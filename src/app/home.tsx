import { View, Text, StyleSheet, Alert} from "react-native" 
import Button from "@/components/Button"
import { Length } from "@/enums/length"
import colors from "@/constants/colors";

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
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        width: "70%", 
        textAlign: "center",
        fontSize: 28,
        color: colors.white
    }
})