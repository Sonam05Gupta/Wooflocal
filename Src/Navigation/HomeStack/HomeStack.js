import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../../Screens/AuthScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
    
      <Stack.Navigator>
        
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
   
    )
}


