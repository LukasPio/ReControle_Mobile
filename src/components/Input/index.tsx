import { TextInput, TextInputProps } from "react-native";
import { InputSizeStyles, styles } from "./styles";
import { Length } from "@/src/enums/length";

type Props = TextInputProps & {
    size?: Length
}

export default function Input({value, onChangeText, size = Length.medium}: Props) {
    return (
        <TextInput 
        value={value}
        onChangeText={onChangeText} 
        style={[styles.input, InputSizeStyles[size]]}
        placeholder="Email"
        />
    )
}