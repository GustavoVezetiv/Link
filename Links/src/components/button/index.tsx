import { View, Text, TouchableOpacity, TouchableOpacityProps } from'react-native'
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

type Props = TouchableOpacityProps &{
    title: string

}

export function Button({ title, ...rest }: Props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}



