import colors from "@/colors";
import { hasTextLength, SCREEN_WIDTH } from "@/utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default (props) => {
  const { id, name, species } = props;
  console.log({ props });
  const speciesName = species?.name;
  const speciesString = hasTextLength(speciesName) ? ` (${speciesName})` : "";
  return (
    <View style={styles.cont} key={id}>
      <Text style={styles.title}>{`${name}  ${speciesString}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: "600", fontSize: 12, color: colors.black },
  detail: {
    fontStyle: "italic",
    fontSize: 10,
    color: colors.gray2,
    marginTop: 5,
  },
  cont: {
    justifyContent: "center",
    marginVertical: 12,
    backgroundColor: colors.gray1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    width: SCREEN_WIDTH * 0.38,
    height: SCREEN_WIDTH * 0.36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.37,
    shadowRadius: 13,

    elevation: 20,
  },
});
