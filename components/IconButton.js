import { Pressable, StyleSheet, Text } from "react-native";

//import { Ionicons } from "@expo/vector-icons";

function IconButton({ iconName, iconColor, onPress }) {
    return(
        <Pressable 
        onPress={onPress} 
        style={({ pressed }) => pressed ? styles.pressed : null}
        >
            {/* <Ionicons name={iconName} size={24} color={iconColor}/> */}
            <Text>Ionicons</Text>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
});