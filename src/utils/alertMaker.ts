import { Alert } from "react-native";

export function showErrorMessage(message: string) {
    Alert.alert("Ocorreu um erro!", message)
}

export function showMessage(title:string, message: string) {
    Alert.alert(title, message);
}