import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";

import { useLayoutEffect } from "react";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("pressed");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton iconName="star" iconColor="white" onPress={headerButtonPressHandler}/>
        });
    }, [navigation, headerButtonPressHandler]);

    return(
        <ScrollView>
            <View style={styles.root}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={{ color: "white" }}
                />
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List list={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List list={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    listContainer: {
        width: "80%",
    },
});