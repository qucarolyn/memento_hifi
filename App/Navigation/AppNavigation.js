import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import {HomeFeedScreen} from '../Screens/HomeFeedScreen'
import {MementoScreen} from '../Screens/MementoScreen'
import {MementoEditScreen} from '../Screens/MementoEditScreen'
import {VisionEditScreen} from '../Screens/VisionEditScreen'
import {ReflectScreen} from '../Screens/ReflectScreen'
import {OnboardingScreen} from '../Screens/OnboardingScreen'



const Stack = createStackNavigator();

const TabNav = createBottomTabNavigator();
function TabNavigator () {
  return (
    <TabNav.Navigator initialRouteName='HomeTab'>
        {/* <TabNav.Screen name="HomeTab" component={HomeStackComponent} /> */}
      </TabNav.Navigator>
  );
}


export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="float">
            <Stack.Screen name = "HomeFeed" component = {HomeFeedScreen} />
            <Stack.Screen name = "Memento" component = {MementoScreen} />
            <Stack.Screen name = "MementoEdit" component = {MementoEditScreen} />
            <Stack.Screen name = "VisionEdit" component = {VisionEditScreen} />
            <Stack.Screen name = "Reflect" component = {ReflectScreen} />
            <Stack.Screen name = "Onboarding" component = {OnboardingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}