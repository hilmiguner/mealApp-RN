import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealOverviewsScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId));

    // DYNAMIC OPTIONS
    useLayoutEffect(() => {
        navigation.setOptions({ title: categoryTitle });
    }, [categoryTitle]);
    
    
    function renderMealItem(mealData) {
        const mealItemProps = {
            id: mealData.item.id,
            title: mealData.item.title,
            imageUrl: mealData.item.imageUrl,
            duration: mealData.item.duration,
            complexity: mealData.item.complexity,
            affordability: mealData.item.affordability,
        };
        
        return <MealItem mealProps={mealItemProps}/>
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={displayedMeals}
            keyExtractor={(meal) => meal.id}
            renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealOverviewsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,  
    },
});