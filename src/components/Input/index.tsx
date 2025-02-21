import { Text, TextInput, TextInputProps, View } from "react-native";
import { InputSizeStyles, TitleSizeStyles, styles } from "./styles";
import { Length } from "@/enums/length";
import colors from "@/constants/colors";

type Props = TextInputProps & {
    size?: Length,
    title: string,
    value: string,
    placeholder?: string,
    isPassword?: boolean,
    isEmail?: boolean
}

export default function Input({isEmail = false, isPassword = false, placeholder = "" , title, value, size = Length.medium, onChangeText}: Props) {
    return (
        <View style={styles.container}>
        <Text style={[styles.title, TitleSizeStyles[size]]}>{title}</Text>
        <TextInput 
        value={value}
        onChangeText={onChangeText} 
        style={[styles.input, InputSizeStyles[size]]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        secureTextEntry={isPassword}
        keyboardType={isEmail ? "email-address" : "default"}
        autoCapitalize={isEmail || isPassword ? "none" : "words"}
        />
        </View>
    )
}