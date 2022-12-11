import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BaconScreen } from "../baconScreen";
import { BaconsScreen } from "../baconsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BaconsScreen}
          options={{ title: "All list" }}
        />
        <Stack.Screen
          name="FullInfoAboutBacon"
          component={BaconScreen}
          options={{ title: "One post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
