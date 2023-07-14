import { StyleSheet, Text } from "react-native";

function FavoritesScreen() {
    return(
        <Text style={styles.text}>The Favorite Screen!!1</Text>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
    },
});