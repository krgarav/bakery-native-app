import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createNativeStackNavigator} from "@react-navigation/native"
import Auth from "./screen/Mobile"
import Otp from './screen/Otp';
import Cakes from './screen/Cakes';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cakes">
        <Stack.Screen name="Home" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Cakes" component={Cakes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}