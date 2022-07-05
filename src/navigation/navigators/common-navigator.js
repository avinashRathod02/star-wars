import { navigatorOptions as options } from "../navigation-action";
import { routes } from "../navigation-routes";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Fragment } from "react";
import Login from "screens/auth/login";
import MovieDetails from "screens/movie-details";
import Movies from "screens/movies";

const Stack = createStackNavigator();

export const CommonNavigator = (props) => {
  return (
    <Fragment>
      <Stack.Screen name={routes.LOGIN} component={Login} options={options} />
      <Stack.Screen name={routes.MOVIES} component={Movies} options={options} />
      <Stack.Screen
        name={routes.MOVIE_DETAILS}
        component={MovieDetails}
        options={options}
      />
    </Fragment>
  );
};
