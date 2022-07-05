import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigatorOptions as options } from "../navigation-action";
import { routes } from "../navigation-routes";

const Stack = createStackNavigator();

export const CommonNavigator = (props) => {
  return (
    <Fragment>
      <Stack.Screen
        name={routes.LOGIN}
        component={}
        options={options}
      />
      <Stack.Screen name={routes.MOVIES_LIST} component={} options={options} />
      <Stack.Screen name={routes.MOVIE_INFORMATION} component={} options={options} />
      
    </Fragment>
  );
};
