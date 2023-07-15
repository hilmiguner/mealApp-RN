import 'react-native-gesture-handler';

import { StatusBar, Text, View } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewsScreen from './screens/MealOverviewsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import Ionicons from "react-native-vector-icons/Ionicons";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
    }}>
      <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: "Meal App",
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size}/>
      }}
      />
      <Drawer.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size}/>
      }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle='light-content'/>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}>
            <Stack.Screen 
            name='MealCategories' 
            component={DrawerNavigator} 
            options={{
              headerShown: false,
            }}
            />
            <Stack.Screen 
            name='MealOverviews' 
            component={MealOverviewsScreen}
            />
            <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
            options={{
              title: "About the meal"
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

export default App;