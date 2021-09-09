import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/AuthScreen/LoginScreen';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      
      <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/> 
      </Stack.Navigator>
   
    )
}


