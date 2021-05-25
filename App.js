import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ClientInfoScreen } from "./screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Клиенты" component={HomeScreen} />
        <Stack.Screen name="Client" component={ClientInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
