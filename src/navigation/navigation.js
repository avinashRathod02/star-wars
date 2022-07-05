import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./navigation-routes";
import colors from "@/colors";
import { CommonNavigator, } from "./navigators";

const Stack = createStackNavigator();

export const ApplicationNavigator= (props) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        headerMode='none'
        initialRouteName={routes.MOVIES_LIST }
      >
        <CommonNavigator/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
