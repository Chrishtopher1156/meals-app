import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview Screen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator () {
  return (
      <Drawer.Navigator  
        screenOptions={{
          headerStyle: { backgroundColor: '#582828ff' },
          headerTintColor: 'white',
          sceneStyle: { backgroundColor: '#876c5bff'},
          drawerContentStyle: { backgroundColor: '#582828ff'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#582828ff',
          drawerActiveBackgroundColor: '#b98d8dff',
        }}
      >
        <Drawer.Screen  
          name='Categories' 
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => 
              <Ionicons name='list' size={size} color={color}/>
          }}
        />
        <Drawer.Screen 
          name='Favorites'  
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => 
              <Ionicons name='star' color={color} size={size}/>
          }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar  style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#582828ff' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#876c5bff'}
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen 
            name="MealDetails" 
            component={MealDetailScreen} 
            options={{
              title: 'About the Meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
