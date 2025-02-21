import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export default function Input({value, onChangeText}: TextInputProps) {
    return (
        <TextInput 
        value={value}
        onChangeText={onChangeText} 
        style={styles.input}
        placeholder="Email"
        />
    )
}