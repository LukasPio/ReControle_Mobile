import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { textSizeStyles, buttonSizeStyles, styles } from "./styles";
import { Length } from "@/enums/length";

type Props = TouchableOpacityProps & {
    text: string,
    size?: Length
}

export default function Button({ onPress, text, size = Length.medium}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, buttonSizeStyles[size]]}
            onPress={onPress}
        >
            <Text style={[styles.text, textSizeStyles[size]]}>{text}</Text>
        </TouchableOpacity>
    )
}