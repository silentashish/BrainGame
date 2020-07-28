import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StartScreen,
  GameLevelOne,
  SuccessScreen,
  FailedScreen,
  GameLevelTwo,
  GameLevelThree,
} from '../Pages';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="FailedScreen" component={FailedScreen} />
        <Stack.Screen name="LevelOne" component={GameLevelOne} />
        <Stack.Screen name="LevelTwo" component={GameLevelTwo} />
        <Stack.Screen name="LevelThree" component={GameLevelThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
