import { Link, LinkProps } from "expo-router";
import { styles } from "./styles";

export default function TextLink({children ,href}: LinkProps) {
    return (
        <Link href={href} style={styles.link}>{children}</Link>
    )
}