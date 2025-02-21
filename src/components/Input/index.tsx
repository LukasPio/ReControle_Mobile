import { Text, TextInput, TextInputProps, View } from "react-native";
import { InputSizeStyles, TitleSizeStyles, styles } from "./styles";
import { Length } from "@/enums/length";

type Props = TextInputProps & {
    size?: Length,
    title: string,
    value: string,
    placeholder?: string
}

export default function Input({placeholder = "" , title, value, size = Length.medium, onChangeText}: Props) {
    return (
        <View style={styles.container}>
        <Text style={TitleSizeStyles[size]}>{title}:</Text>
        <TextInput 
        value={value}
        onChangeText={onChangeText} 
        style={[styles.input, InputSizeStyles[size]]}
        placeholder={placeholder}
        />
        </View>
    )
}