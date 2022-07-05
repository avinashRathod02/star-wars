import React from "react";
import { ActivityIndicator } from "react-native";
import colors from "@/colors";

export default (props) => {
  const { size = "small", color, style } = props;
  return (
    <ActivityIndicator
      size={size}
      style={style}
      color={color ? color : colors.gray2}
    />
  );
};
