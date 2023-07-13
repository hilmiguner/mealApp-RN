import { Pressable, StyleSheet, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

function IconButton({ iconName, iconColor, onPress }) {
    return(
        <Pressable 
        onPress={onPress} 
        style={({ pressed }) => pressed ? styles.pressed : null}
        >
            <Ionicons name={iconName} size={24} color={iconColor}/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
});