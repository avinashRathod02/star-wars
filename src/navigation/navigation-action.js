import { TransitionPresets } from "@react-navigation/stack";

export const navigatorOptions = {
  animationEnabled: true,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};
