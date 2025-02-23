import { ActivityIndicator, Text, TextProps, View } from "react-native";
import { styles } from "./styles";

export default function LoadScreen({ children }: TextProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#3d403d" size={80} />
      <Text
        children={children ? children : "Carregando..."}
        style={styles.text}
      />
    </View>
  );
}
