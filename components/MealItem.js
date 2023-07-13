import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";

import MealDetails from "./MealDetails";

import { useNavigation } from "@react-navigation/native";

function MealItem({ mealProps }) {
    const navigation = useNavigation();

    return(
        <View style={styles.mealItem}>
            <Pressable 
            android_ripple={{ color: "#ccc" }} 
            style={({ pressed }) => pressed ? styles.buttonPressed : null}
            onPress={() => {navigation.navigate("MealDetails", { mealId: mealProps.id })}}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: mealProps.imageUrl }} style={styles.image}/>
                        <Text style={styles.title}>{mealProps.title}</Text>
                    </View>
                    <MealDetails 
                    duration={mealProps.duration} 
                    complexity={mealProps.complexity} 
                    affordability={mealProps.affordability}
                    textStyle={{ color: "black" }}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : null,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        fontSize: 18,
        margin: 8,
    },
});