import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '../Navigation/AuthStack';
import HomeStack from '../Navigation/HomeStack/HomeStack'


const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} /> 
      <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}


