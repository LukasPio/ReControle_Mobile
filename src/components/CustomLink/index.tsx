import { Link, LinkProps } from "expo-router";
import { styles } from "./styles";

export default function CustomLink({children ,href}: LinkProps) {
    return (
        <Link replace href={href} style={styles.link}>{children}</Link>
    )
}