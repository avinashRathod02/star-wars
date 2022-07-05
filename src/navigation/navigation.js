import { routes } from "./navigation-routes";
import { CommonNavigator } from "./navigators";
import colors from "@/colors";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

export const ApplicationNavigator = (props) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator headerMode='none' initialRouteName={routes.MOVIES}>
        {CommonNavigator()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
