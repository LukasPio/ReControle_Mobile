import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        input: {
            borderWidth: 1,
            color: colors.white
        }
    }
)

export const InputSizeStyles = StyleSheet.create(
    {
        small: {
            width: "70%",
            height: 45,
            fontSize: 20
        },
        medium: {
            width: "80%",
            height: 45,
            fontSize: 18
        },
        large: {
            width: "90%",
            height: 50,
            fontSize: 20
        }
    }
)