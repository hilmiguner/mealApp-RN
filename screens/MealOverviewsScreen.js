import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList";

function MealOverviewsScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId));

    // DYNAMIC OPTIONS
    useLayoutEffect(() => {
        navigation.setOptions({ title: categoryTitle });
    }, [categoryTitle]);

    return (<MealsList displayedMeals={displayedMeals}/>);
}

export default MealOverviewsScreen;