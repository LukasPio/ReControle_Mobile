import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        input: {
            borderWidth: 1,
            color: colors.white
        },
        container: {
            width: "100%",
            alignItems: "center"
        }
    }
)

export const InputSizeStyles = StyleSheet.create(
    {
        small: {
            width: "75%",
            height: 45,
            fontSize: 20
        },
        medium: {
            width: "85%",
            height: 45,
            fontSize: 18
        },
        large: {
            width: "95%",
            height: 50,
            fontSize: 20
        }
    }
)

export const TitleSizeStyles = StyleSheet.create(
    {
        small: {
            width: "75%",
            fontSize: 18
        },
        medium: {
            width: "85%",
            fontSize: 20
        },
        large: {
            width: "95%",
            fontSize: 23
        }
    }
)