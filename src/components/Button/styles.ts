import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.dark_gray,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 7,
    },
    text: {
        color: colors.white
    }
})

export const buttonSizeStyles = StyleSheet.create(
    {
        small: {
            width: "45%",
            height: 40,
        },
        medium: {
            width: "55%",
            height: 45
        },
        large: {
            width: "75%",
            height: 50
        }
    }
)

export const textSizeStyles = StyleSheet.create(
    {
        small: {
            fontSize: 16
        },
        medium: {
            fontSize: 20
        },
        large: {
            fontSize: 25
        }
    }
)
