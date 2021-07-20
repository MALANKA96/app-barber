import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, ClientInfoScreen, AddClientScreen } from "./screens";

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
            headerStyle: { backgroundColor: "#00796b", height: 85 },
            headerTitleStyle: { color: "#f3f3f3" },
          }}
        />
        <Stack.Screen
          name="ClientInfo"
          component={ClientInfoScreen}
          options={{
            title: "Детали клиента",
            headerStyle: { backgroundColor: "#00796b", height: 85 },
            headerTitleStyle: { color: "#f3f3f3" },
          }}
        />
        <Stack.Screen
          name="AddClient"
          component={AddClientScreen}
          options={{
            title: "Добавление клиента",
            headerStyle: { backgroundColor: "#00796b", height: 85 },
            headerTitleStyle: { color: "#f3f3f3" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
