import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ displayedMeals }) {
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
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,  
    },
});