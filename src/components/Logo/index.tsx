import { Image } from "react-native";
import { imageSize, styles } from "./styles";
import { Length } from "@/enums/length";

type Props = {
    size?: Length
}

export default function Logo({size = Length.medium}: Props) {
    return (
        <Image style={[styles.logo, imageSize[size]]} source={require("@/../assets/images/app_logo.png")}/>
    )
}