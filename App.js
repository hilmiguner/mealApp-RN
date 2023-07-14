import 'react-native-gesture-handler';

import { StatusBar, Text, View } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewsScreen from './screens/MealOverviewsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator>
      <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      />
    </Drawer.Navigator>
  );
}

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
          component={DrawerNavigator} 
          />
          <Stack.Screen 
          name='MealOverviews' 
          component={MealOverviewsScreen}
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