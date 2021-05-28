import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, ClientInfoScreen } from "./screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Клиенты",
            headerStyle: { backgroundColor: "#2A86FF" },
          }}
        />
        <Stack.Screen
          name="ClientInfo"
          component={ClientInfoScreen}
          options={{
            title: "Детали клиента",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
