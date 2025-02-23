import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container: {
            "flex": 1,
            "backgroundColor": colors.background,
            "justifyContent": "center",
            "alignItems": "center"
        },
        text: {
            "fontSize": 30,
            "marginTop": 5,
            "color": colors.primary
        }
    }
)