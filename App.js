import { StatusBar, Text, View } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewsScreen from './screens/MealOverviewsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}>
          <Stack.Screen 
          name='MealCategories' 
          component={CategoriesScreen} 
          options={{ title: "Meal Categories" }}
          />
          <Stack.Screen 
          name='MealOverviews' 
          component={MealOverviewsScreen}
          // DYNAMIC OPTIONS
          // options={({ route, navigation }) => {
          //   const categoryTitle = route.params.categoryTitle;
          //   return { title: categoryTitle };
          // }}
          />
          <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;